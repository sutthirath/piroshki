const piroshkiModel = {
    data: [
        {
            name: 'Bavarian Sausage',
            filling: 'sausage',
            size: 12
        },
        {
            name: 'Beef & Cabbage',
            filling: 'beef with braised cabbage',
            size: 8
        },
        {
            name: 'Chicken & Broccoli',
            filling: 'tender chicken with chopped broccoli',
            size: 8
        }
    ],
    addPiroshki: function(name, filling, size) {
        let newPiroshki = {
            name,
            filling,
            size
        };
        this.data.push(newPiroshki);
    },
    getAllPiroskis: function() {
        return this.data;
    },
    getPiroshki: function(id) {
        return this.data[id];
    },
    updatePiroshki: function(id, name, filling, size) {
        this.data[id].name = name;
        this.data[id].filling = filling;
        this.data[id].size = size;
    },
    deletePiroshki: function(id) {
        this.data.splice(id, 1);
    }
};

module.exports = piroshkiModel;