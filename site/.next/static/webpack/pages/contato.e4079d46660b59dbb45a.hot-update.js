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
          children: [response.type, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGF0by5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwiY29udGVudCIsImNvbnRhdG8iLCJzZXRDb250YXRvIiwiZm9ybVNhdmUiLCJ0eXBlIiwibWVzc2FnZSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJzZW5kTXNnIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwicmVzcG9uc2VFbnYiLCJlcnJvciIsIm9uQ2hhbmdlSW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBQzhCOztDQUNTOztDQUNJOztDQUMrQzs7QUFFMUYsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUVaO0FBRlksa0JBR2tCQyxzREFBUSxDQUFDO0FBQ25DQyxRQUFJLEVBQUMsRUFEOEI7QUFFbkNDLFNBQUssRUFBRSxFQUY0QjtBQUduQ0MsV0FBTyxFQUFFLEVBSDBCO0FBSW5DQyxXQUFPLEVBQUU7QUFKMEIsR0FBRCxDQUgxQjtBQUFBLE1BR0xDLE9BSEs7QUFBQSxNQUdJQyxVQUhKLGlCQVVaOzs7QUFWWSxtQkFXb0JOLHNEQUFRLENBQUM7QUFDckNPLFlBQVEsRUFBRSxLQUQyQjtBQUVyQ0MsUUFBSSxFQUFFLEVBRitCO0FBR3JDQyxXQUFPLEVBQUU7QUFINEIsR0FBRCxDQVg1QjtBQUFBLE1BV0xDLFFBWEs7QUFBQSxNQVdLQyxXQVhMLGtCQWlCWjs7O0FBQ0EsTUFBTUMsT0FBTztBQUFBLGdNQUFHLGlCQUFNQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaQSxlQUFDLENBQUNDLGNBQUYsR0FEWSxDQUNROztBQUVwQkgseUJBQVcsQ0FBQztBQUFDSix3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QUFDLGdEQUFEO0FBQU8sb0JBQUksRUFBQyxVQUFaO0FBQXVCLG9CQUFJLEVBQUMsU0FBNUI7QUFBc0Msa0JBQUUsRUFBQyxTQUF6QztBQUFtRCwyQkFBVyxFQUFDLHlCQUEvRDtBQUFzRix3QkFBUSxFQUFFQTtBQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFoQkosZUFxQkkscUVBQUMsaURBQUQ7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBc0IscUJBQU8sTUFBN0I7QUFBOEIsbUJBQUssRUFBQyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkosZUE2REkscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdESjtBQUFBO0FBRko7QUFrRUQ7O0dBMUhNMUIsSTs7S0FBQUEsSTtBQTBITjtBQUVjQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YXRvLmU0MDc5ZDQ2NjYwYjU5ZGJiNDVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7IC8vaW1wb3J0YW5kbyBvIGNhYmXDp2FsaG9cclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JzsgLy9pbXBvcnRhbmRvIG8gTWVudSBwYXJhIHVzYXIgY29tbyBjb21wb25lbnRlXHJcbmltcG9ydCBSb2RhcGUgZnJvbSAnLi4vY29tcG9uZW50cy9Sb2RhcGUnOyAvL2ltcG9ydGFuZG8gbyBjb21wb25lbnRlIFJvZGFwZVxyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgRm9ybSwgRm9ybUdyb3VwLCBJbnB1dCwgSnVtYm90cm9uLCBMYWJlbCB9IGZyb20gJ3JlYWN0c3RyYXAnOyAvL2ltcG9ydGFuZG8gbyBjb21wb25lbnRlXHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICAgIC8vJ3NldGFuZG8nIHZhbG9yZXNcclxuICAgIGNvbnN0IFtjb250YXRvLCBzZXRDb250YXRvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOicnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBzdWJqZWN0OiAnJyxcclxuICAgICAgICBjb250ZW50OiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9xdWFuZG8gbyB1c3XDoXJpbyBjbGljYXIgbm9zIGNhbXBvcyBkbyB1c3XDoXJpb1xyXG4gICAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3N1Ym1ldGVuZG8gbyBmb3JtdWzDoXJpb1xyXG4gICAgY29uc3Qgc2VuZE1zZyA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wYXJhIG7Do28gcmVjYXJyZWdhciBhIHDDoWdpbmFcclxuXHJcbiAgICAgICAgc2V0UmVzcG9uc2Uoe2Zvcm1TYXZlOiB0cnVlfSk7IC8vcXVhbmRvIGNvbWXDp2FyIGEgc2FsdmFyXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvY29udGF0bycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29udGF0byksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VFbnYgPSBhd2FpdCByZXMuanNvbigpOyAvL2xlbmRvIG8gcmV0b3JubyBkbyBlbnZpb1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZUVudi5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7IC8vJ3NldGFuZG8nIG9zIHZhbG9yZXMgcmVjZWJpZG9zXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VFbnYubWVzc2FnZSAvL3BlZ2FuZG8gYSBtc2cgZGEgYXBpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7IC8vJ3NldGFuZG8nIG9zIHZhbG9yZXMgcmVjZWJpZG9zXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZUVudi5tZXNzYWdlIC8vcGVnYW5kbyBhIG1zZyBkYSBhcGlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKXtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2UoeyAvLydzZXRhbmRvJyBvcyB2YWxvcmVzIHJlY2ViaWRvc1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFUlJPOiBNZW5zYWdlbSBuw6NvIGVudmlhZGEgY29tIHN1Y2Vzc28sIHRlbnRlIG1haXMgdGFyZGUhJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vc2VtcHJlIHF1ZSBvIHVzdcOhcmlvIHJlYWxpemFyIGFsZ3VtYSBhbHRlcmHDp8OjbyBlbSB1bSBpbnB1dCwgZXhlY3V0YXLDoSBhIGZ1bsOnw6NvIHF1ZSAnc2V0YScgdmFsb3JlcyBjb21vIG9iamV0bywgcGVnYW5kbyBvIHF1ZSBvIGNvbnRhdG8gasOhIHBvc3N1aShwb3IgaXNzbyBvcyAuLi4pLCBhcMOzcyBwZWdhIG8gbm9tZSBkbyBjYW1wbyBlIG8gdmFsb3IgZGVsZVxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbnB1dCA9IGUgPT4gc2V0Q29udGF0byh7IC4uLmNvbnRhdG8sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWV9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vdG9kbyBjb250ZcO6ZG8gZGV2ZSBlc3RhciBkZW50cm8gZGUgdW1hIHRhZ1xyXG4gICAgICAgIDw+IFxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Db250YXRvIC0gTWF5cmE8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNvbnRhdG8gY29tIGEgZW1wcmVzYSAuLi5cIi8+IHsvKiBhanVkYSBvIHNpdGUgYSBzZXIgbG9jYWxpemFkbyBub3Mgc2l0ZXMgZGUgYnVzY2FzLCBwb3IgaXNzbyB1c2Etc2UgbyBuZXh0LCBxdWFuZG8gc2UgcXVlciB1bWEgcMOhZ2luYSBvdGltaXphZGEgcGFyYSBvcyBidXNjYWRvcmVzICovfVxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJNYXlyYVwiLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPE1lbnU+PC9NZW51PlxyXG5cclxuICAgICAgICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJkZXNjci10b3BcIj4gey8qIHVzYWRvIHBhcmEgY3JpYXIgdW1hIMOhcmVhIHBhcmEgbyBjb250ZcO6ZG8sIGUgaW5zZXJpZG8gdW0gc2VsZXRvciBwYXJhIHF1ZSBwb3NzYSBlc3RpbGl6YXIgKi99XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAge2AuZGVzY3ItdG9we1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZlZDEzNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+IHsvKiB1c2FkbyBwYXJhIGFsaW5oYXIgbyBjb250ZcO6ZG8gaW5kZXBlbmRlbnRlIGRvIHRhbWFuaG8gZGEgdGVsYSwgZSBlc3NhIGNsYXNzZSBwYXJhIGNlbnRyYWxpemFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj5Db250YXRvPC9oMT4gey8qIHVzYW5kbyBhIGNsYXNzZSBwYXJhIGVzdGlsaXphciBhIGZvbnRlICovfVxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG5cclxuICAgICAgICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJmb3JtLWNvbnRhdG9cIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICB7YC5mb3JtLWNvbnRhdG97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3NlbmRNc2d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIm5hbWVcIj5Ob21lOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTm9tZSBjb21wbGV0b1wiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJlbWFpbFwiPkUtbWFpbDo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIk1lbGhvciBlLW1haWxcIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwic3ViamVjdFwiPkFzc3VudG86PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdWJqZWN0XCIgaWQ9XCJzdWJqZWN0XCIgcGxhY2Vob2xkZXI9XCJBc3N1bnRvIGRhIG1lbnNhZ2VtXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cImNvbnRlbnRcIj5Db250ZcO6ZG86PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwiY29udGVudFwiIGlkPVwiY29udGVudFwiIHBsYWNlaG9sZGVyPVwiQ29udGXDumRvIGRhIG1lbnNhZ2VtXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvdXRsaW5lIGNvbG9yPVwid2FybmluZ1wiPkVudmlhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxSb2RhcGU+PC9Sb2RhcGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9