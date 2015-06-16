angular.module('fiAngulartjeApp')
.filter('parenswrap', () => {
    return (value) => {
        return (!value) ? '' : '(' + value + ')';
    };
});