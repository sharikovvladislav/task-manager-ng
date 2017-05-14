/**
 * Created by Vlad on 04.05.2016.
 */
define(['angular'], function(angular) {
  return function(module) {
    module.directive('tmTaskTypeAdder', [
      function() {
        return {
          restrict: 'A',
          scope: {
            tmTaskTypeAdder: '='
          },
          link: function(scope, element) {
            var classPostfix,
              classMain = 'label-',
              newClassName,
              allPossibleClasses = [
                'label-default',
                'label-primary',
                'label-success',
                'label-info'
              ];

            scope.$watch('tmTaskTypeAdder.type', function(newTaskType) {
              if (angular.isUndefined(newTaskType)) {
                return;
              }
              classPostfix = getClassPostfix(newTaskType);
              newClassName = classMain + classPostfix;

              for (var i = 0; i < allPossibleClasses.length; i++) {
                element.removeClass(allPossibleClasses[i]);
              }

              element.addClass(newClassName);
            });
          }
        };
      }
    ]);

    function getClassPostfix(taskType) {
      var classPostfix = '';

      switch (taskType) {
        case 'A':
          classPostfix = 'primary';
          break;
        case 'B':
          classPostfix = 'success';
          break;
        case 'C':
          classPostfix = 'info';
          break;
        default:
        case 'D':
          classPostfix = 'default';
          break;
      }
      return classPostfix;
    }
  };
});
