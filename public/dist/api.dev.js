"use strict";

var API = {
  getLastWorkout: function getLastWorkout() {
    var res, json;
    return regeneratorRuntime.async(function getLastWorkout$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch("/api/workouts"));

          case 3:
            res = _context.sent;
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 9:
            _context.next = 11;
            return regeneratorRuntime.awrap(res.json());

          case 11:
            json = _context.sent;
            return _context.abrupt("return", json[json.length - 1]);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 6]]);
  },
  addExercise: function addExercise(data) {
    var id, res, json;
    return regeneratorRuntime.async(function addExercise$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = location.search.split("=")[1];
            _context2.next = 3;
            return regeneratorRuntime.awrap(fetch("/api/workouts/" + id, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
            }));

          case 3:
            res = _context2.sent;
            _context2.next = 6;
            return regeneratorRuntime.awrap(res.json());

          case 6:
            json = _context2.sent;
            return _context2.abrupt("return", json);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  createWorkout: function createWorkout() {
    var data,
        res,
        json,
        _args3 = arguments;
    return regeneratorRuntime.async(function createWorkout$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
            _context3.next = 3;
            return regeneratorRuntime.awrap(fetch("/api/workouts", {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json"
              }
            }));

          case 3:
            res = _context3.sent;
            _context3.next = 6;
            return regeneratorRuntime.awrap(res.json());

          case 6:
            json = _context3.sent;
            return _context3.abrupt("return", json);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  getWorkoutsInRange: function getWorkoutsInRange() {
    var res, json;
    return regeneratorRuntime.async(function getWorkoutsInRange$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(fetch("/api/workouts/range"));

          case 2:
            res = _context4.sent;
            _context4.next = 5;
            return regeneratorRuntime.awrap(res.json());

          case 5:
            json = _context4.sent;
            return _context4.abrupt("return", json);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    });
  }
};