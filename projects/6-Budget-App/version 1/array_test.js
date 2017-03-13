    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    data.allItems.exp.push(1, 2, 3, 4, 5);

    id = data.allItems[type][data.allItems[type].length - 1].id + 1