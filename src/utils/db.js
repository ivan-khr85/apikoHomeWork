import * as R from 'ramda';

const toJSON = response => response.json();

const fetchAndMap = (url, map) => fetch(url).then(toJSON).then(map);

const idEquals = _id => R.propEq('_id', _id);

const findById = _id => R.find(idEquals(_id));

const findIndexById = _id => R.findIndex(idEquals(_id));


const COLLECTIONS = {
  questions: [],
  answers: [],
  votes: [],
  users: [],
};


const API = 'https://jsonplaceholder.typicode.com/';

const API_URL = {
  questions: 'posts',
  answers: 'comments',
  votes: 'todos',
  users: 'users',
};

const getUrl = (collection, id = '') => `${API}${API_URL[collection]}/${id}`;

const MAPS = {
  questions: item => ({
    _id: String(item.id),
    title: item.title,
    description: item.body,
    tags: ['tag'],
    createdAt: new Date(),
    createdById: String(item.userId),
  }),
  answers: (item, i) => ({
    _id: String(item.id),
    questionId: String(item.postId),
    createdAt: new Date(),
    createdById: String(i + 1),
    title: item.name,
    description: item.body,
  }),
  votes: (item, i) => ({
    _id: String(item.id),
    isPositive: item.completed,
    createdAt: new Date(),
    createdById: String(item.userId),
    answerId: String(i + 1),
  }),
  users: item => ({
    _id: String(item.id),
    email: item.email,
    profile: {
      fullName: item.name,
    },
    services: {},
  }),
};


const mapData = name => data => data.map(MAPS[name]);

const createCollection = name => ({
  find: async function() {
    const data = await fetchAndMap(getUrl(name), mapData(name));

    data.forEach(item => {
      if (!findById(item._id)(COLLECTIONS[name])) {
        COLLECTIONS[name] = COLLECTIONS[name].concat(item);
      }
    });

    return COLLECTIONS[name];
  },
  findOne: async function(_id) {
    const found = findById(_id)(COLLECTIONS[name]);
    if (found) {
      return found;
    }
    return await fetchAndMap(getUrl(name, _id), MAPS[name]).then(item => {
      if (Number(item._id)) {
        if (!findById(item._id)) {
          COLLECTIONS[name] = COLLECTIONS[name].concat(item);
        }
        return item;
      }
    });
  },
  insert: function(doc) {
    const ids = COLLECTIONS[name].map(R.prop('_id'));
    const lastId = Math.max(...ids) || 0;
    const newDoc = {
      _id: String(lastId + 1),
      ...doc,
      createdAt: new Date(),
    };
    COLLECTIONS[name] = COLLECTIONS[name].concat(newDoc);
    return newDoc;
  },
  update: function(_id, fields) {
    const index = findIndexById(_id)(COLLECTIONS[name]);
    const doc = COLLECTIONS[name][index];
    const newDoc = { ...doc, ...fields, _id };
    COLLECTIONS[name][index] = newDoc;
    return newDoc;
  },
  remove: function (_id) {
    COLLECTIONS[name] = COLLECTIONS[name].filter(item => item._id !== _id);
  },
});


export default {
  questions: createCollection('questions'),
  answers: createCollection('answers'),
  votes: createCollection('votes'),
  users: createCollection('users'),
  pooling: (callback, time = 1000) => {
    callback();
    return setInterval(callback, time);
  },
};
