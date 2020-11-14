webpackHotUpdate_N_E("pages/contato",{

/***/ "./pages/contato.js":
/*!**************************!*\
  !*** ./pages/contato.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_Rodape__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Rodape */ "./components/Rodape.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var _jsxFileName = "C:\\Users\\mayta\\Documents\\MeusProjetos\\semana_de_imersao_3_0\\site\\pages\\contato.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 //importando o cabeçalho

 //importando o Menu para usar como componente

 //importando o componente Rodape

 //importando o componente

function Home() {
  _s();

  //'setando' valores
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: '',
    email: '',
    subject: '',
    content: ''
  }),
      contato = _useState[0],
      setContato = _useState[1]; //quando o usuário clicar nos campos do usuário


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    formSave: false,
    type: '',
    message: ''
  }),
      response = _useState2[0],
      setResponse = _useState2[1]; //submetendo o formulário


  var sendMsg = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var res, responseEnv;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); //para não recarregar a página

              setResponse({
                formSave: true
              }); //quando começar a salvar

              _context.prev = 2;
              _context.next = 5;
              return fetch('http://localhost:8080/contato', {
                method: 'POST',
                body: JSON.stringify(contato),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              responseEnv = _context.sent;

              //lendo o retorno do envio
              if (responseEnv.error) {
                setResponse({
                  //'setando' os valores recebidos
                  formSave: false,
                  type: 'error',
                  message: responseEnv.message //pegando a msg da api

                });
              } else {
                setResponse({
                  //'setando' os valores recebidos
                  formSave: false,
                  type: 'success',
                  message: responseEnv.message //pegando a msg da api

                });
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              setResponse({
                //'setando' os valores recebidos
                formSave: false,
                type: 'error',
                message: 'ERRO: Mensagem não enviada com sucesso, tente mais tarde!'
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 12]]);
    }));

    return function sendMsg(_x) {
      return _ref.apply(this, arguments);
    };
  }(); //sempre que o usuário realizar alguma alteração em um input, executará a função que 'seta' valores como objeto, pegando o que o contato já possui(por isso os ...), após pega o nome do campo e o valor dele


  var onChangeInput = function onChangeInput(e) {
    return setContato(_objectSpread(_objectSpread({}, contato), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  };

  return (
    /*#__PURE__*/
    //todo conteúdo deve estar dentro de uma tag
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("title", {
          children: "Contato - Mayra"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("meta", {
          name: "description",
          content: "Contato com a empresa ..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("meta", {
          name: "author",
          content: "Mayra"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Jumbotron"], {
        fluid: true,
        className: "descr-top",
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("style", {
          children: ".descr-top{\n                        background-color: #000;\n                        color: #fed136;\n                        padding-top: 100px;\n                        padding-bottom: 50;\n                        margin-bottom: 0rem !important;\n                    }"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
          className: "text-center",
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
            className: "display-4",
            children: "Contato"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 21
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Jumbotron"], {
        fluid: true,
        className: "form-contato",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("style", {
          children: ".form-contato{\n                        padding-top: 80px;\n                        padding-bottom: 80px;\n                        background-color: #fff;\n                        margin-bottom: 0rem !important;\n                    }"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
          children: [response, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            onSubmit: sendMsg,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
                "for": "name",
                children: "Nome:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
                type: "text",
                name: "name",
                id: "name",
                placeholder: "Nome completo",
                onChange: onChangeInput
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
                "for": "email",
                children: "E-mail:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
                type: "email",
                name: "email",
                id: "email",
                placeholder: "Melhor e-mail",
                onChange: onChangeInput
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
                "for": "subject",
                children: "Assunto:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
                type: "text",
                name: "subject",
                id: "subject",
                placeholder: "Assunto da mensagem",
                onChange: onChangeInput
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
                "for": "content",
                children: "Conte\xFAdo:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
                type: "textarea",
                name: "content",
                id: "content",
                placeholder: "Conte\xFAdo da mensagem",
                onChange: onChangeInput
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
              type: "submit",
              outline: true,
              color: "warning",
              children: "Enviar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Rodape__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }, this)]
    }, void 0, true)
  );
}

_s(Home, "kIYnHLAURWI2O+lE0m1YO/hfMo8=");

_c = Home;
;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGF0by5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwiY29udGVudCIsImNvbnRhdG8iLCJzZXRDb250YXRvIiwiZm9ybVNhdmUiLCJ0eXBlIiwibWVzc2FnZSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJzZW5kTXNnIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwicmVzcG9uc2VFbnYiLCJlcnJvciIsIm9uQ2hhbmdlSW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBQzhCOztDQUNTOztDQUNJOztDQUMrQzs7QUFFMUYsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUVaO0FBRlksa0JBR2tCQyxzREFBUSxDQUFDO0FBQ25DQyxRQUFJLEVBQUMsRUFEOEI7QUFFbkNDLFNBQUssRUFBRSxFQUY0QjtBQUduQ0MsV0FBTyxFQUFFLEVBSDBCO0FBSW5DQyxXQUFPLEVBQUU7QUFKMEIsR0FBRCxDQUgxQjtBQUFBLE1BR0xDLE9BSEs7QUFBQSxNQUdJQyxVQUhKLGlCQVVaOzs7QUFWWSxtQkFXb0JOLHNEQUFRLENBQUM7QUFDckNPLFlBQVEsRUFBRSxLQUQyQjtBQUVyQ0MsUUFBSSxFQUFFLEVBRitCO0FBR3JDQyxXQUFPLEVBQUU7QUFINEIsR0FBRCxDQVg1QjtBQUFBLE1BV0xDLFFBWEs7QUFBQSxNQVdLQyxXQVhMLGtCQWlCWjs7O0FBQ0EsTUFBTUMsT0FBTztBQUFBLGdNQUFHLGlCQUFNQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaQSxlQUFDLENBQUNDLGNBQUYsR0FEWSxDQUNROztBQUVwQkgseUJBQVcsQ0FBQztBQUFDSix3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QUFPLG9CQUFJLEVBQUMsVUFBWjtBQUF1QixvQkFBSSxFQUFDLFNBQTVCO0FBQXNDLGtCQUFFLEVBQUMsU0FBekM7QUFBbUQsMkJBQVcsRUFBQyx5QkFBL0Q7QUFBc0Ysd0JBQVEsRUFBRUE7QUFBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBaEJKLGVBcUJJLHFFQUFDLGlEQUFEO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFPLE1BQTdCO0FBQThCLG1CQUFLLEVBQUMsU0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJKLGVBNkRJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3REo7QUFBQTtBQUZKO0FBa0VEOztHQTFITTFCLEk7O0tBQUFBLEk7QUEwSE47QUFFY0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGF0by45NDIyMjU1MjBiMmI1MjU2NWM5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnOyAvL2ltcG9ydGFuZG8gbyBjYWJlw6dhbGhvXHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7IC8vaW1wb3J0YW5kbyBvIE1lbnUgcGFyYSB1c2FyIGNvbW8gY29tcG9uZW50ZVxyXG5pbXBvcnQgUm9kYXBlIGZyb20gJy4uL2NvbXBvbmVudHMvUm9kYXBlJzsgLy9pbXBvcnRhbmRvIG8gY29tcG9uZW50ZSBSb2RhcGVcclxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIEZvcm0sIEZvcm1Hcm91cCwgSW5wdXQsIEp1bWJvdHJvbiwgTGFiZWwgfSBmcm9tICdyZWFjdHN0cmFwJzsgLy9pbXBvcnRhbmRvIG8gY29tcG9uZW50ZVxyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICAvLydzZXRhbmRvJyB2YWxvcmVzXHJcbiAgICBjb25zdCBbY29udGF0bywgc2V0Q29udGF0b10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTonJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgc3ViamVjdDogJycsXHJcbiAgICAgICAgY29udGVudDogJydcclxuICAgIH0pO1xyXG5cclxuICAgIC8vcXVhbmRvIG8gdXN1w6FyaW8gY2xpY2FyIG5vcyBjYW1wb3MgZG8gdXN1w6FyaW9cclxuICAgIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9zdWJtZXRlbmRvIG8gZm9ybXVsw6FyaW9cclxuICAgIGNvbnN0IHNlbmRNc2cgPSBhc3luYyBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcGFyYSBuw6NvIHJlY2FycmVnYXIgYSBww6FnaW5hXHJcblxyXG4gICAgICAgIHNldFJlc3BvbnNlKHtmb3JtU2F2ZTogdHJ1ZX0pOyAvL3F1YW5kbyBjb21lw6dhciBhIHNhbHZhclxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NvbnRhdG8nLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbnRhdG8pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRW52ID0gYXdhaXQgcmVzLmpzb24oKTsgLy9sZW5kbyBvIHJldG9ybm8gZG8gZW52aW9cclxuICAgICAgICAgICAgaWYocmVzcG9uc2VFbnYuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2UoeyAvLydzZXRhbmRvJyBvcyB2YWxvcmVzIHJlY2ViaWRvc1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlRW52Lm1lc3NhZ2UgLy9wZWdhbmRvIGEgbXNnIGRhIGFwaVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2UoeyAvLydzZXRhbmRvJyBvcyB2YWxvcmVzIHJlY2ViaWRvc1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VFbnYubWVzc2FnZSAvL3BlZ2FuZG8gYSBtc2cgZGEgYXBpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycil7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlKHsgLy8nc2V0YW5kbycgb3MgdmFsb3JlcyByZWNlYmlkb3NcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRVJSTzogTWVuc2FnZW0gbsOjbyBlbnZpYWRhIGNvbSBzdWNlc3NvLCB0ZW50ZSBtYWlzIHRhcmRlISdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3NlbXByZSBxdWUgbyB1c3XDoXJpbyByZWFsaXphciBhbGd1bWEgYWx0ZXJhw6fDo28gZW0gdW0gaW5wdXQsIGV4ZWN1dGFyw6EgYSBmdW7Dp8OjbyBxdWUgJ3NldGEnIHZhbG9yZXMgY29tbyBvYmpldG8sIHBlZ2FuZG8gbyBxdWUgbyBjb250YXRvIGrDoSBwb3NzdWkocG9yIGlzc28gb3MgLi4uKSwgYXDDs3MgcGVnYSBvIG5vbWUgZG8gY2FtcG8gZSBvIHZhbG9yIGRlbGVcclxuICAgIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSBlID0+IHNldENvbnRhdG8oeyAuLi5jb250YXRvLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvL3RvZG8gY29udGXDumRvIGRldmUgZXN0YXIgZGVudHJvIGRlIHVtYSB0YWdcclxuICAgICAgICA8PiBcclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q29udGF0byAtIE1heXJhPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDb250YXRvIGNvbSBhIGVtcHJlc2EgLi4uXCIvPiB7LyogYWp1ZGEgbyBzaXRlIGEgc2VyIGxvY2FsaXphZG8gbm9zIHNpdGVzIGRlIGJ1c2NhcywgcG9yIGlzc28gdXNhLXNlIG8gbmV4dCwgcXVhbmRvIHNlIHF1ZXIgdW1hIHDDoWdpbmEgb3RpbWl6YWRhIHBhcmEgb3MgYnVzY2Fkb3JlcyAqL31cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiTWF5cmFcIi8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxNZW51PjwvTWVudT5cclxuXHJcbiAgICAgICAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwiZGVzY3ItdG9wXCI+IHsvKiB1c2FkbyBwYXJhIGNyaWFyIHVtYSDDoXJlYSBwYXJhIG8gY29udGXDumRvLCBlIGluc2VyaWRvIHVtIHNlbGV0b3IgcGFyYSBxdWUgcG9zc2EgZXN0aWxpemFyICovfVxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgLmRlc2NyLXRvcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZWQxMzY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiB7LyogdXNhZG8gcGFyYSBhbGluaGFyIG8gY29udGXDumRvIGluZGVwZW5kZW50ZSBkbyB0YW1hbmhvIGRhIHRlbGEsIGUgZXNzYSBjbGFzc2UgcGFyYSBjZW50cmFsaXphciAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+Q29udGF0bzwvaDE+IHsvKiB1c2FuZG8gYSBjbGFzc2UgcGFyYSBlc3RpbGl6YXIgYSBmb250ZSAqL31cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuXHJcbiAgICAgICAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwiZm9ybS1jb250YXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAge2AuZm9ybS1jb250YXRve1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZX1cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17c2VuZE1zZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwibmFtZVwiPk5vbWU6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOb21lIGNvbXBsZXRvXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cImVtYWlsXCI+RS1tYWlsOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiTWVsaG9yIGUtbWFpbFwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJzdWJqZWN0XCI+QXNzdW50bzo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1YmplY3RcIiBpZD1cInN1YmplY3RcIiBwbGFjZWhvbGRlcj1cIkFzc3VudG8gZGEgbWVuc2FnZW1cIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwiY29udGVudFwiPkNvbnRlw7pkbzo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJjb250ZW50XCIgaWQ9XCJjb250ZW50XCIgcGxhY2Vob2xkZXI9XCJDb250ZcO6ZG8gZGEgbWVuc2FnZW1cIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG91dGxpbmUgY29sb3I9XCJ3YXJuaW5nXCI+RW52aWFyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFJvZGFwZT48L1JvZGFwZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=