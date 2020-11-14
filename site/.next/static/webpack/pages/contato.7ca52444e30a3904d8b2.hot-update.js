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
          children: [response.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "alert alert-danger",
            children: response.message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 46
          }, this) : "", response.type === 'su' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "alert alert-danger",
            children: response.message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 43
          }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            onSubmit: sendMsg,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
                "for": "name",
                children: "Nome:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
                type: "text",
                name: "name",
                id: "name",
                placeholder: "Nome completo",
                onChange: onChangeInput
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
                "for": "email",
                children: "E-mail:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
                type: "email",
                name: "email",
                id: "email",
                placeholder: "Melhor e-mail",
                onChange: onChangeInput
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
                "for": "subject",
                children: "Assunto:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
                type: "text",
                name: "subject",
                id: "subject",
                placeholder: "Assunto da mensagem",
                onChange: onChangeInput
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
                "for": "content",
                children: "Conte\xFAdo:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
                type: "textarea",
                name: "content",
                id: "content",
                placeholder: "Conte\xFAdo da mensagem",
                onChange: onChangeInput
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
              type: "submit",
              outline: true,
              color: "warning",
              children: "Enviar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
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
        lineNumber: 127,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGF0by5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwiY29udGVudCIsImNvbnRhdG8iLCJzZXRDb250YXRvIiwiZm9ybVNhdmUiLCJ0eXBlIiwibWVzc2FnZSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJzZW5kTXNnIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwicmVzcG9uc2VFbnYiLCJlcnJvciIsIm9uQ2hhbmdlSW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBQzhCOztDQUNTOztDQUNJOztDQUMrQzs7QUFFMUYsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUVaO0FBRlksa0JBR2tCQyxzREFBUSxDQUFDO0FBQ25DQyxRQUFJLEVBQUMsRUFEOEI7QUFFbkNDLFNBQUssRUFBRSxFQUY0QjtBQUduQ0MsV0FBTyxFQUFFLEVBSDBCO0FBSW5DQyxXQUFPLEVBQUU7QUFKMEIsR0FBRCxDQUgxQjtBQUFBLE1BR0xDLE9BSEs7QUFBQSxNQUdJQyxVQUhKLGlCQVVaOzs7QUFWWSxtQkFXb0JOLHNEQUFRLENBQUM7QUFDckNPLFlBQVEsRUFBRSxLQUQyQjtBQUVyQ0MsUUFBSSxFQUFFLEVBRitCO0FBR3JDQyxXQUFPLEVBQUU7QUFINEIsR0FBRCxDQVg1QjtBQUFBLE1BV0xDLFFBWEs7QUFBQSxNQVdLQyxXQVhMLGtCQWlCWjs7O0FBQ0EsTUFBTUMsT0FBTztBQUFBLGdNQUFHLGlCQUFNQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaQSxlQUFDLENBQUNDLGNBQUYsR0FEWSxDQUNROztBQUVwQkgseUJBQVcsQ0FBQztBQUFDSix3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QUksRUFBQyxTQUF4QjtBQUFrQyxrQkFBRSxFQUFDLFNBQXJDO0FBQStDLDJCQUFXLEVBQUMscUJBQTNEO0FBQWlGLHdCQUFRLEVBQUVBO0FBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVhKLGVBZ0JJLHFFQUFDLG9EQUFEO0FBQUEsc0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTyx1QkFBSSxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUkscUVBQUMsZ0RBQUQ7QUFBTyxvQkFBSSxFQUFDLFVBQVo7QUFBdUIsb0JBQUksRUFBQyxTQUE1QjtBQUFzQyxrQkFBRSxFQUFDLFNBQXpDO0FBQW1ELDJCQUFXLEVBQUMseUJBQS9EO0FBQXNGLHdCQUFRLEVBQUVBO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWhCSixlQXFCSSxxRUFBQyxpREFBRDtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFzQixxQkFBTyxNQUE3QjtBQUE4QixtQkFBSyxFQUFDLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCSixlQThESSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOURKO0FBQUE7QUFGSjtBQW1FRDs7R0EzSE0xQixJOztLQUFBQSxJO0FBMkhOO0FBRWNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhdG8uN2NhNTI0NDRlMzBhMzkwNGQ4YjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJzsgLy9pbXBvcnRhbmRvIG8gY2FiZcOnYWxob1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnOyAvL2ltcG9ydGFuZG8gbyBNZW51IHBhcmEgdXNhciBjb21vIGNvbXBvbmVudGVcclxuaW1wb3J0IFJvZGFwZSBmcm9tICcuLi9jb21wb25lbnRzL1JvZGFwZSc7IC8vaW1wb3J0YW5kbyBvIGNvbXBvbmVudGUgUm9kYXBlXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBGb3JtLCBGb3JtR3JvdXAsIElucHV0LCBKdW1ib3Ryb24sIExhYmVsIH0gZnJvbSAncmVhY3RzdHJhcCc7IC8vaW1wb3J0YW5kbyBvIGNvbXBvbmVudGVcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gICAgLy8nc2V0YW5kbycgdmFsb3Jlc1xyXG4gICAgY29uc3QgW2NvbnRhdG8sIHNldENvbnRhdG9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6JycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHN1YmplY3Q6ICcnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3F1YW5kbyBvIHVzdcOhcmlvIGNsaWNhciBub3MgY2FtcG9zIGRvIHVzdcOhcmlvXHJcbiAgICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogJycsXHJcbiAgICAgICAgbWVzc2FnZTogJydcclxuICAgIH0pO1xyXG5cclxuICAgIC8vc3VibWV0ZW5kbyBvIGZvcm11bMOhcmlvXHJcbiAgICBjb25zdCBzZW5kTXNnID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3BhcmEgbsOjbyByZWNhcnJlZ2FyIGEgcMOhZ2luYVxyXG5cclxuICAgICAgICBzZXRSZXNwb25zZSh7Zm9ybVNhdmU6IHRydWV9KTsgLy9xdWFuZG8gY29tZcOnYXIgYSBzYWx2YXJcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jb250YXRvJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb250YXRvKSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ31cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUVudiA9IGF3YWl0IHJlcy5qc29uKCk7IC8vbGVuZG8gbyByZXRvcm5vIGRvIGVudmlvXHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlRW52LmVycm9yKXtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlKHsgLy8nc2V0YW5kbycgb3MgdmFsb3JlcyByZWNlYmlkb3NcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZUVudi5tZXNzYWdlIC8vcGVnYW5kbyBhIG1zZyBkYSBhcGlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlKHsgLy8nc2V0YW5kbycgb3MgdmFsb3JlcyByZWNlYmlkb3NcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlRW52Lm1lc3NhZ2UgLy9wZWdhbmRvIGEgbXNnIGRhIGFwaVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpe1xyXG4gICAgICAgICAgICBzZXRSZXNwb25zZSh7IC8vJ3NldGFuZG8nIG9zIHZhbG9yZXMgcmVjZWJpZG9zXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0VSUk86IE1lbnNhZ2VtIG7Do28gZW52aWFkYSBjb20gc3VjZXNzbywgdGVudGUgbWFpcyB0YXJkZSEnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZW1wcmUgcXVlIG8gdXN1w6FyaW8gcmVhbGl6YXIgYWxndW1hIGFsdGVyYcOnw6NvIGVtIHVtIGlucHV0LCBleGVjdXRhcsOhIGEgZnVuw6fDo28gcXVlICdzZXRhJyB2YWxvcmVzIGNvbW8gb2JqZXRvLCBwZWdhbmRvIG8gcXVlIG8gY29udGF0byBqw6EgcG9zc3VpKHBvciBpc3NvIG9zIC4uLiksIGFww7NzIHBlZ2EgbyBub21lIGRvIGNhbXBvIGUgbyB2YWxvciBkZWxlXHJcbiAgICBjb25zdCBvbkNoYW5nZUlucHV0ID0gZSA9PiBzZXRDb250YXRvKHsgLi4uY29udGF0bywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZX0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy90b2RvIGNvbnRlw7pkbyBkZXZlIGVzdGFyIGRlbnRybyBkZSB1bWEgdGFnXHJcbiAgICAgICAgPD4gXHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNvbnRhdG8gLSBNYXlyYTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ29udGF0byBjb20gYSBlbXByZXNhIC4uLlwiLz4gey8qIGFqdWRhIG8gc2l0ZSBhIHNlciBsb2NhbGl6YWRvIG5vcyBzaXRlcyBkZSBidXNjYXMsIHBvciBpc3NvIHVzYS1zZSBvIG5leHQsIHF1YW5kbyBzZSBxdWVyIHVtYSBww6FnaW5hIG90aW1pemFkYSBwYXJhIG9zIGJ1c2NhZG9yZXMgKi99XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIk1heXJhXCIvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8TWVudT48L01lbnU+XHJcblxyXG4gICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImRlc2NyLXRvcFwiPiB7LyogdXNhZG8gcGFyYSBjcmlhciB1bWEgw6FyZWEgcGFyYSBvIGNvbnRlw7pkbywgZSBpbnNlcmlkbyB1bSBzZWxldG9yIHBhcmEgcXVlIHBvc3NhIGVzdGlsaXphciAqL31cclxuICAgICAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICB7YC5kZXNjci10b3B7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmVkMTM2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj4gey8qIHVzYWRvIHBhcmEgYWxpbmhhciBvIGNvbnRlw7pkbyBpbmRlcGVuZGVudGUgZG8gdGFtYW5obyBkYSB0ZWxhLCBlIGVzc2EgY2xhc3NlIHBhcmEgY2VudHJhbGl6YXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPkNvbnRhdG88L2gxPiB7LyogdXNhbmRvIGEgY2xhc3NlIHBhcmEgZXN0aWxpemFyIGEgZm9udGUgKi99XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcblxyXG4gICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImZvcm0tY29udGF0b1wiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgLmZvcm0tY29udGF0b3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIHtyZXNwb25zZS50eXBlID09PSAnZXJyb3InID8gPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWRhbmdlcic+e3Jlc3BvbnNlLm1lc3NhZ2V9PC9kaXY+OlwiXCJ9XHJcbiAgICAgICAgICAgICAgICB7cmVzcG9uc2UudHlwZSA9PT0gJ3N1JyA/IDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1kYW5nZXInPntyZXNwb25zZS5tZXNzYWdlfTwvZGl2PjpcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtzZW5kTXNnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJuYW1lXCI+Tm9tZTo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5vbWUgY29tcGxldG9cIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwiZW1haWxcIj5FLW1haWw6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJNZWxob3IgZS1tYWlsXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cInN1YmplY3RcIj5Bc3N1bnRvOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3ViamVjdFwiIGlkPVwic3ViamVjdFwiIHBsYWNlaG9sZGVyPVwiQXNzdW50byBkYSBtZW5zYWdlbVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJjb250ZW50XCI+Q29udGXDumRvOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cImNvbnRlbnRcIiBpZD1cImNvbnRlbnRcIiBwbGFjZWhvbGRlcj1cIkNvbnRlw7pkbyBkYSBtZW5zYWdlbVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb3V0bGluZSBjb2xvcj1cIndhcm5pbmdcIj5FbnZpYXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Um9kYXBlPjwvUm9kYXBlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==