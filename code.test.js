const depthFirstSearch = require('./code.js');

describe('Depth First Search Tests', () => {
    test('finds correct path in a simple graph', () => {
        const graph = {
            'A': ['B', 'C'],
            'B': ['D'],
            'C': ['E'],
            'D': [],
            'E': ['B']
        };
        expect(depthFirstSearch(graph, 'A', 'D')).toEqual(['A', 'B', 'D']);
    });

    test('returns empty list if no path exists', () => {
        const graph = {
            'A': ['B'],
            'B': ['A'],
            'C': []
        };
        expect(depthFirstSearch(graph, 'A', 'C')).toEqual([]);
    });

    test('returns list with only start node if start equals target', () => {
        const graph = {
            'A': ['B'],
            'B': ['C'],
            'C': ['D']
        };
        expect(depthFirstSearch(graph, 'A', 'A')).toEqual(['A']);
    });
});

