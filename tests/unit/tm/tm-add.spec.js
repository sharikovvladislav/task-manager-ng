/**
 * Created by Vlad on 10.05.2016.
 */
(function () {
  beforeEach(module('tm'));

  var ctrl,
    scope;

  beforeEach(inject(function($controller, $rootScope) {
    ctrl = $controller;
    scope = $rootScope.$new();
    ctrl = ctrl('tm.list', { $scope: scope });
  }));

  describe('test case #1', function () {
    it('test #1', function () {
      expect(ctrl).toBeDefined();
      expect(ctrl.getSummaryTimeOfList).toBeDefined();

      expect(scope.onAddTaskButtonClick).toBeDefined();
      expect(scope.onInit).toBeDefined();
    });
    it('ctrl.getSummaryTimeOfList', function () {
      expect(ctrl.getSummaryTimeOfList([{duration: 1}])).toEqual(1);
      expect(ctrl.getSummaryTimeOfList([{duration: 1}, {duration: 3}, {}])).toEqual(4);
      expect(ctrl.getSummaryTimeOfList([{}])).toEqual(0);
      expect(ctrl.getSummaryTimeOfList([{}, {}, {}])).toEqual(0);
      expect(ctrl.getSummaryTimeOfList([{}, {}, {duration: 100500}])).toEqual(100500);
    });
  });
})();