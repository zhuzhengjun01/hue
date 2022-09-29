// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var solrFormulaParser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,6],$V1=[1,8],$V2=[1,9],$V3=[1,10],$V4=[1,11],$V5=[1,13],$V6=[1,14],$V7=[1,15],$V8=[1,16],$V9=[1,18],$Va=[1,19],$Vb=[1,20],$Vc=[1,21],$Vd=[1,23],$Ve=[1,24],$Vf=[1,25],$Vg=[1,26],$Vh=[1,27],$Vi=[1,28],$Vj=[2,5,10,17,18,19,20,22],$Vk=[2,4],$Vl=[1,32],$Vm=[2,6],$Vn=[5,10,17,18,19,20,22],$Vo=[2,8],$Vp=[2,9],$Vq=[1,53],$Vr=[1,54],$Vs=[1,55],$Vt=[1,56],$Vu=[1,57],$Vv=[17,18,19,20],$Vw=[1,68],$Vx=[1,67],$Vy=[5,10,17,18,22],$Vz=[2,15],$VA=[2,5,10,17,18,22],$VB=[2,11],$VC=[2,12],$VD=[2,13],$VE=[2,14],$VF=[1,76],$VG=[1,77],$VH=[10,22],$VI=[2,41],$VJ=[2,10],$VK=[1,74],$VL=[1,75],$VM=[1,97],$VN=[2,10,22],$VO=[2,42];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"SolrFormulaAutocomplete":3,"SolrFormula":4,"EOF":5,"SolrFormula_EDIT":6,"CURSOR":7,"NonParenthesizedSolrFormula":8,"(":9,")":10,"NonParenthesizedSolrFormula_EDIT":11,"RightParenthesisOrError":12,"NUMBER":13,"IDENTIFIER":14,"FUNCTION":15,"ArgumentList":16,"+":17,"-":18,"*":19,"/":20,"ArgumentList_EDIT":21,",":22,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"CURSOR",9:"(",10:")",13:"NUMBER",14:"IDENTIFIER",15:"FUNCTION",17:"+",18:"-",19:"*",20:"/",22:","},
productions_: [0,[3,2],[3,2],[3,2],[4,1],[4,3],[6,1],[6,3],[8,1],[8,1],[8,4],[8,3],[8,3],[8,3],[8,3],[8,2],[11,2],[11,2],[11,2],[11,2],[11,4],[11,4],[11,5],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,2],[11,2],[16,1],[16,3],[21,1],[21,3],[21,3],[21,5],[12,1],[12,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

     return {
       parsedValue: $$[$0-1]
     };
   
break;
case 2:

     return $$[$0-1]
   
break;
case 3:

     return { suggestAggregateFunctions: true }
   
break;
case 5:
this.$ = $$[$0-2] + $$[$0-1] + $$[$0];
break;
case 7: case 21:
this.$ = $$[$0-1];
break;
case 10:
this.$ = $$[$0-3] + $$[$0-2] + $$[$0-1] + $$[$0];
break;
case 11:
this.$ = 'sum(' + $$[$0-2] + ',' + $$[$0] + ')';
break;
case 12:
this.$ = 'sub(' + $$[$0-2] + ',' + $$[$0] + ')';
break;
case 13:
this.$ = 'mul(' + $$[$0-2] + ',' + $$[$0] + ')';
break;
case 14:
this.$ = 'div(' + $$[$0-2] + ',' + $$[$0] + ')';
break;
case 15:
this.$ = 'sub(0,' + $$[$0] + ')';
break;
case 16: case 17: case 22:
this.$ = { suggestOperators: true };
break;
case 18: case 19: case 20: case 23: case 24: case 27: case 28: case 31: case 32: case 35: case 36: case 39:
this.$ = { suggestAggregateFunctions: true, suggestFunctions: true, suggestFields: true };
break;
case 25: case 29: case 33: case 37: case 46:
this.$ = $$[$0-2];
break;
case 26: case 30: case 34: case 38: case 40: case 44:
this.$ = $$[$0];
break;
}
},
table: [{3:1,4:2,6:3,7:[1,4],8:5,9:$V0,11:7,13:$V1,14:$V2,15:$V3,18:$V4},{1:[3]},{5:[1,12],17:$V5,18:$V6,19:$V7,20:$V8},{5:[1,17],17:$V9,18:$Va,19:$Vb,20:$Vc},{5:[1,22],13:$Vd,14:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi},o($Vj,$Vk),{4:31,6:33,7:$Vl,8:29,9:$V0,11:30,13:$V1,14:$V2,15:$V3,18:$V4},o($Vj,$Vm),o($Vn,$Vo,{7:[1,34]}),o($Vn,$Vp,{7:[1,35]}),{9:[1,36]},{4:37,6:39,7:[1,38],8:5,9:$V0,11:7,13:$V1,14:$V2,15:$V3,18:$V4},{1:[2,1]},{4:40,6:42,7:[1,41],8:5,9:$V0,11:7,13:$V1,14:$V2,15:$V3,18:$V4},{4:43,6:45,7:[1,44],8:5,9:$V0,11:7,13:$V1,14:$V2,15:$V3,18:$V4},{4:46,6:48,7:[1,47],8:5,9:$V0,11:7,13:$V1,14:$V2,15:$V3,18:$V4},{4:49,6:51,7:[1,50],8:5,9:$V0,11:7,13:$V1,14:$V2,15:$V3,18:$V4},{1:[2,2]},{4:52,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},{4:58,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},{4:59,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},{4:60,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},{1:[2,3]},o($Vj,[2,18]),o($Vj,[2,19]),{4:61,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},{4:62,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},{4:63,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},{4:64,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},o($Vv,$Vk,{10:[1,65]}),o($Vv,$Vm,{12:66,2:$Vw,10:$Vx}),{17:$V5,18:$V6,19:$V7,20:$V8},{13:$Vd,14:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi},{17:$V9,18:$Va,19:$Vb,20:$Vc},o($Vj,[2,16]),o($Vj,[2,17]),{4:72,6:73,7:[1,70],8:5,9:$V0,11:7,13:$V1,14:$V2,15:$V3,16:69,18:$V4,21:71},o($Vy,$Vz,{19:$V7,20:$V8}),o($VA,[2,39],{13:$Vd,14:$Ve,19:$Vh,20:$Vi}),o($VA,[2,40],{19:$Vb,20:$Vc}),o($Vy,$VB,{19:$V7,20:$V8}),o($VA,[2,23],{13:$Vd,14:$Ve,19:$Vh,20:$Vi}),o($VA,[2,26],{19:$Vb,20:$Vc}),o($Vy,$VC,{19:$V7,20:$V8}),o($VA,[2,27],{13:$Vd,14:$Ve,19:$Vh,20:$Vi}),o($VA,[2,30],{19:$Vb,20:$Vc}),o($Vn,$VD),o($Vj,[2,31],{13:$Vd,14:$Ve}),o($Vj,[2,34]),o($Vn,$VE),o($Vj,[2,35],{13:$Vd,14:$Ve}),o($Vj,[2,38]),o($VA,[2,25],{19:$VF,20:$VG}),{4:78,8:29,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},o($Vj,$Vo),o($Vj,$Vp),{9:[1,79]},{4:80,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},o($VA,[2,29],{19:$VF,20:$VG}),o($Vj,[2,33]),o($Vj,[2,37]),o($VA,[2,24],{19:$VF,20:$VG}),o($VA,[2,28],{19:$VF,20:$VG}),o($Vj,[2,32]),o($Vj,[2,36]),o($Vj,[2,5]),o($Vj,[2,7]),o($Vj,[2,47]),o($Vj,[2,48]),{10:[1,81],22:[1,82]},{2:$Vw,10:$Vx,12:83,13:$Vd,14:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi},{2:$Vw,10:$Vx,12:84},o($VH,$VI,{17:$V5,18:$V6,19:$V7,20:$V8}),o($VJ,[2,43],{17:$V9,18:$Va,19:$Vb,20:$Vc,22:[1,85]}),{4:86,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},{4:87,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},{4:88,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},{4:89,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},{17:$VK,18:$VL,19:$VF,20:$VG},{4:91,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,16:90,18:$Vu},o($VA,$Vz,{19:$VF,20:$VG}),o($Vn,$VJ,{7:[1,92]}),{4:93,6:94,7:$Vl,8:5,9:$V0,11:7,13:$V1,14:$V2,15:$V3,18:$V4},o($Vj,[2,20]),o($Vj,[2,21]),{4:91,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,16:95,18:$Vu},o($VA,$VB,{19:$VF,20:$VG}),o($VA,$VC,{19:$VF,20:$VG}),o($Vj,$VD),o($Vj,$VE),{10:[1,96],22:$VM},o($VN,$VI,{17:$VK,18:$VL,19:$VF,20:$VG}),o($Vj,[2,22]),o($VH,$VO,{17:$V5,18:$V6,19:$V7,20:$V8}),o($VJ,[2,44],{17:$V9,18:$Va,19:$Vb,20:$Vc,22:[1,98]}),o($VJ,[2,45],{22:$VM}),o($Vj,$VJ),{4:99,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,18:$Vu},{4:91,8:5,9:$Vq,13:$Vr,14:$Vs,15:$Vt,16:100,18:$Vu},o($VN,$VO,{17:$VK,18:$VL,19:$VF,20:$VG}),o($VJ,[2,46],{22:$VM})],
defaultActions: {12:[2,1],17:[2,2],22:[2,3]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: lexer.yylloc,
                    ruleId: stack.slice(stack.length - 2, stack.length).join('_'),
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};


parser.yy.parseError = function () { return false; }

parser.identifyPartials = function (beforeCursor, afterCursor) {
  var beforeMatch = beforeCursor.match(/[^()-*+/,\s]*$/);
  var afterMatch = afterCursor.match(/^[^()-*+/,\s]*/);
  return {left: beforeMatch ? beforeMatch[0].length : 0, right: afterMatch ? afterMatch[0].length : 0};
};

var adjustLocationForCursor = function (location) {
  // columns are 0-based and lines not, so add 1 to cols
  var newLocation = {
    first_line: location.first_line,
    last_line: location.last_line,
    first_column: location.first_column + 1,
    last_column: location.last_column + 1
  };
  if (parser.yy.cursorFound) {
    if (parser.yy.cursorFound.first_line === newLocation.first_line && parser.yy.cursorFound.last_column <= newLocation.first_column) {
      var additionalSpace = parser.yy.partialLengths.left + parser.yy.partialLengths.right;
      additionalSpace -= parser.yy.partialCursor ? 1 : 3; // For some reason the normal cursor eats 3 positions.
      newLocation.first_column = newLocation.first_column + additionalSpace;
      newLocation.last_column = newLocation.last_column + additionalSpace;
    }
  }
  return newLocation;
};

parser.addFunctionLocation = function (location, name) {
  parser.yy.locations.push({ type: 'function', name: name, location: adjustLocationForCursor(location) });
}

parser.addFieldLocation = function (location, name) {
  parser.yy.locations.push({ type: 'field', name: name, location: adjustLocationForCursor(location) });
}

parser.parseSolrFormula = function (formula, debug) {
  parser.yy.cursorFound = false;
  parser.yy.locations = [];
  formula = formula.replace(/\r\n|\n\r/gm, '\n');

  var result;
  try {
    result = parser.parse(formula);
  } catch (err) {
    if (debug) {
      console.log(beforeCursor + '\u2020' + afterCursor);
      console.log(err);
      console.error(err.stack);
    }
  }
  return result || false;
}

parser.autocompleteSolrFormula = function (beforeCursor, afterCursor, debug) {
  parser.yy.cursorFound = false;
  parser.yy.locations = [];

  beforeCursor = beforeCursor.replace(/\r\n|\n\r/gm, '\n');
  afterCursor = afterCursor.replace(/\r\n|\n\r/gm, '\n');

  parser.yy.partialLengths = parser.identifyPartials(beforeCursor, afterCursor);

  if (parser.yy.partialLengths.left > 0) {
    beforeCursor = beforeCursor.substring(0, beforeCursor.length - parser.yy.partialLengths.left);
  }

  if (parser.yy.partialLengths.right > 0) {
    afterCursor = afterCursor.substring(parser.yy.partialLengths.right);
  }

  var result;
  try {
    result = parser.parse(beforeCursor + '\u2020' + afterCursor);
  } catch (err) {
    // Workaround for too many missing parentheses (it's the only error we handle in the parser)
    if (err && err.toString().indexOf('Parsing halted while starting to recover from another error') !== -1) {
      var leftCount = (beforeCursor.match(/\(/g) || []).length;
      var rightCount = (beforeCursor.match(/\)/g) || []).length;
      var parenthesisPad = '';
      while (rightCount < leftCount) {
        parenthesisPad += ')';
        rightCount++;
      }
      try {
        result = parser.parse(beforeCursor + '\u2020' + parenthesisPad);
      } catch (err) {
        return {}
      }
    } else {
      if (debug) {
        console.log(beforeCursor + '\u2020' + afterCursor);
        console.log(err);
        console.error(err.stack);
      }
      return {}
    }
  }
  result.locations = parser.yy.locations;
  return result;
};/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: /* skip whitespace */ 
break;
case 1: /* skip comments */ 
break;
case 2: /* skip comments */ 
break;
case 3: parser.yy.cursorFound = yy_.yylloc; return 7; 
break;
case 4: return 13; 
break;
case 5: return 18; 
break;
case 6: return 17; 
break;
case 7: return 19; 
break;
case 8: return 20; 
break;
case 9:
                                             yy.lexer.unput('(');
                                             parser.addFunctionLocation({
                                               first_line: yy_.yylloc.first_line,
                                               first_column: yy_.yylloc.first_column,
                                               last_line: yy_.yylloc.first_line,
                                               last_column: yy_.yylloc.first_column + yy_.yytext.trim().length
                                             }, yy_.yytext.trim());
                                             return 15;
                                           
break;
case 10: return 22; 
break;
case 11: return 9; 
break;
case 12: return 10; 
break;
case 13: return 5; 
break;
case 14: parser.addFieldLocation(yy_.yylloc, yy_.yytext); return 14; 
break;
}
},
rules: [/^(?:\s)/i,/^(?:--.*)/i,/^(?:[\/][*][^*]*[*]+([^\/*][^*]*[*]+)*[\/])/i,/^(?:\u2020)/i,/^(?:[0-9]+(?:[,.][0-9]+)?)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:[a-z]+\s*\()/i,/^(?:,)/i,/^(?:\()/i,/^(?:\))/i,/^(?:$)/i,/^(?:[^\s\u2020()]+)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
export default solrFormulaParser;
