const localStorageService = {
    setItem: function (key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    },
    getItem: function (key) {
      let data = localStorage.getItem(key) || null;
      return JSON.parse(data);
    }
  };
  
  
  const Helper = {
    findItemArr(array, key, search) {
      return this.array.find(
        array => array.key == search
      )
    },
    groupBy(list, keyGetter) {
      const map = new Map();
      list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
          map.set(key, [item]);
        } else {
          collection.push(item);
        }
      });
      return map;
    }
  };

  
  export {
    localStorageService,
    Helper
  };