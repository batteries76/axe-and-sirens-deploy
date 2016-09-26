"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            { id: 11, name: 'Blue T-Shirt' },
            { id: 12, name: 'Green T-Shirt' },
            { id: 13, name: 'Red T-Shirt' },
            { id: 14, name: 'Yellow T-Shirt' },
            { id: 15, name: 'Purple T-Shirt' },
            { id: 16, name: 'Grey T-Shirt' },
            { id: 17, name: 'Pink T-Shirt' },
            { id: 18, name: 'White T-Shirt' },
            { id: 19, name: 'Black T-Shirt' },
            { id: 20, name: 'Orange T-Shirt' }
        ];
        return { products: products };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map