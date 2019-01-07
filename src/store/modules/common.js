const state = {
  groupsList: [
    {
      id: 0,
      title: 'group1'
    },
    {
      id: 1,
      title: 'group2'
    },
    {
      id: 2,
      title: 'group2'
    },
    {
      id: 3,
      title: 'group2'
    },
    {
      id: 4,
      title: 'group2'
    },
    {
      id: 5,
      title: 'group2'
    }
  ]
};

const getters = {
  groupsList: state => state.groupsList
};

const mutations = {

};

const actions = {

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};