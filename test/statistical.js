var statistical = require('../lib/statistical');
var error = require('../lib/error');
var should = require('should');

suite('Statistical', function() {
  test("AVEDEV", function() {
    statistical.AVEDEV(2, 4, 8, 16).should.equal(4.5);
    statistical.AVEDEV([2, 4, 8, 16]).should.equal(4.5);
    statistical.AVEDEV([2, 4], [8, 16]).should.equal(4.5);
    statistical.AVEDEV([
      [2, 4],
      [8, 16]
    ]).should.equal(4.5);
  });

  test("AVERAGE", function() {
    statistical.AVERAGE(2, 4, 8, 16).should.equal(7.5);
    statistical.AVERAGE([2, 4, 8, 16]).should.equal(7.5);
    statistical.AVERAGE([2, 4], [8, 16]).should.equal(7.5);
    statistical.AVERAGE([
      [2, 4],
      [8, 16]
    ]).should.equal(7.5);
    statistical.AVERAGE([
      [2, 4],
      [8, 16],
      [true, false]
    ]).should.equal(7.5);
  });

  test("AVERAGEA", function() {
    statistical.AVERAGEA(2, 4, 8, 16).should.equal(7.5);
    statistical.AVERAGEA([2, 4, 8, 16]).should.equal(7.5);
    statistical.AVERAGEA([2, 4], [8, 16]).should.equal(7.5);
    statistical.AVERAGEA([2, 4], [6, 8], [true, false]).should.equal(3.5);
    statistical.AVERAGEA([2, 4], [6, 8], [true, false], ['a', 'b']).should.equal(2.625);
  });

  test("AVERAGEIF", function() {
    statistical.AVERAGEIF([2, 4, 8, 16], '>5').should.equal(12);
    statistical.AVERAGEIF([2, 4, 8, 16], '>5', [1, 2, 3, 4]).should.equal(3.5);
    statistical.AVERAGEIF([
      [2, 4],
      [8, 16]
    ], '>5', [
      [1, 2],
      [3, 4]
    ]).should.equal(3.5);
  });

  test("AVERAGEIFS", function() {
    statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2').should.equal(12);
    statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2', [1, 2, 3, 4], '>2').should.equal(12);
    statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2', [1, 1, 1, 1], '>2').should.equal(0);
  });

  test('BETA.DIST', function() {
    statistical.BETA.DIST(2, 8, 10, 1, 3).should.equal(0.6854705810117458);
  });

  test('BETA.INV', function() {
    statistical.BETA.INV(0.6854705810117458, 8, 10, 1, 3).should.equal(1.9999999999999998);
  });

  test('BINOM.DIST', function() {
    statistical.BINOM.DIST(6, 10, 0.5, false).should.equal(0.205078125);
  });

  test('BINOM.DIST.RANGE', function() {
    statistical.BINOM.DIST.RANGE(60, 0.75, 48).should.equal(0.08397496742904752);
    statistical.BINOM.DIST.RANGE(60, 0.75, 45, 50).should.equal(0.5236297934718873);
  });

  test('BINOM.INV', function() {
    statistical.BINOM.INV(6, 0.5, 0.75).should.equal(4);
  });

  test('CHISQ.DIST', function() {
    statistical.CHISQ.DIST(0.5, 1, true).should.equal(0.5204998778130242);
  });

  // TODO: implement
  test('CHISQ.DIST.RT', function() {
    should.equal(statistical.CHISQ.DIST.RT(), undefined);
  });

  test('CHISQ.INV', function() {
    statistical.CHISQ.INV(0.93, 1).should.equal(3.283020286473263);
    statistical.CHISQ.INV(0.6, 2).should.equal(1.83258146374831);
  });

  // TODO: implement
  test('CHISQ.INV.RT', function() {
    should.equal(statistical.CHISQ.INV.RT(), undefined);
  });

  // TODO: implement
  test('CHISQ.TEST', function() {
    should.equal(statistical.CHISQ.TEST(), undefined);
  });

  test('CONFIDENCE.NORM', function() {
    statistical.CONFIDENCE.NORM(0.05, 2.5, 50).should.equal(0.6929519121748391);
  });

  test('CONFIDENCE.T', function() {
    statistical.CONFIDENCE.T(0.05, 1, 50).should.equal(0.28419685015290463);
  });

  test('CORREL', function() {
    statistical.CORREL([3, 2, 4, 5, 6], [9, 7, 12, 15, 17]).should.equal(0.9970544855015815);
  });

  test("COUNT", function() {
    statistical.COUNT().should.equal(0);
    statistical.COUNT(1, 2, 3, 4).should.equal(4);
    statistical.COUNT([1, 2, 3, 4]).should.equal(4);
    statistical.COUNT([1, 2], [3, 4]).should.equal(4);
    statistical.COUNT([
      [1, 2],
      [3, 4]
    ]).should.equal(4);
    statistical.COUNT([
      [1, 2],
      [3, 2],
      [null, null]
    ]).should.equal(4);
    statistical.COUNT([
      [1, 2],
      ['a', 'b'],
      [null, null]
    ]).should.equal(2);
  });

  test("COUNTA", function() {
    statistical.COUNTA().should.equal(0);
    statistical.COUNTA(1, null, 3, 'a', '', 'c').should.equal(4);
    statistical.COUNTA([1, null, 3, 'a', '', 'c']).should.equal(4);
    statistical.COUNTA([1, null, 3], ['a', '', 'c']).should.equal(4);
    statistical.COUNTA([
      [1, null, 3],
      ['a', '', 'c']
    ]).should.equal(4);
  });

  test("COUNTBLANK", function() {
    statistical.COUNTBLANK().should.equal(0);
    statistical.COUNTBLANK(1, null, 3, 'a', '', 'c').should.equal(2);
    statistical.COUNTBLANK([1, null, 3, 'a', '', 'c']).should.equal(2);
    statistical.COUNTBLANK([1, null, 3], ['a', '', 'c']).should.equal(2);
    statistical.COUNTBLANK([
      [1, null, 3],
      ['a', '', 'c']
    ]).should.equal(2);
  });

  test("COUNTIF", function() {
    statistical.COUNTIF([1, null, 3, 'a', ''], '>1').should.equal(1);
    statistical.COUNTIF([1, null, 'c', 'a', ''], '>1').should.equal(0);
    statistical.COUNTIF([
      [1, null, 3],
      ['a', 4, 'c']
    ], '>1').should.equal(2);
    statistical.COUNTIF([
      [1, null, 'a'],
      ['a', 4, 'c']
    ], 'a').should.equal(2);
  });

  test("COUNTIFS", function() {
    statistical.COUNTIFS([1, null, 3, 'a', ''], '>1').should.equal(1);
    statistical.COUNTIFS([1, null, 'c', 'a', ''], '>1').should.equal(0);
    statistical.COUNTIFS([
      [1, null, 3],
      ['a', 4, 'c']
    ], '>1').should.equal(2);
    statistical.COUNTIFS([
      [1, null, 'a'],
      ['a', 4, 'c']
    ], 'a').should.equal(2);
    statistical.COUNTIFS([1, null], '1', [2, null], '2').should.equal(1);
    statistical.COUNTIFS([1, null], '1', [null, 2], '2').should.equal(0);
    statistical.COUNTIFS([
      [1],
      [null]
    ], '1', [
      [2],
      [1]
    ], '2').should.equal(1);
  });

  test('COVARIANCE.P', function() {
    statistical.COVARIANCE.P([3, 2, 4, 5, 6], [9, 7, 12, 15, 17]).should.equal(5.2);
  });

  test('COVARIANCE.S', function() {
    statistical.COVARIANCE.S([2, 4, 8], [5, 11, 12]).should.equal(9.666666666666668);
  });

  test('DEVSQ', function() {
    statistical.DEVSQ([4, 5, 8, 7, 11, 4, 3]).should.equal(48);
  });

  test('EXPON.DIST', function() {
    statistical.EXPON.DIST(0.2, 10, true).should.equal(0.8646647167633873);
    statistical.EXPON.DIST(0.2, 10, false).should.equal(1.353352832366127);
  });

  // TODO: verify if this is not the other way around
  test('F.DIST', function() {
    statistical.F.DIST(15.20686486, 6, 4, true).should.equal(0.0012237995987608916);
    statistical.F.DIST(15.20686486, 6, 4, false).should.equal(0.9899999999985833);
  });

  // TODO: implement
  test('F.DIST.RT', function() {
    should.equal(statistical.F.DIST.RT(), undefined);
  });

  test('F.INV', function() {
    statistical.F.INV(0.01, 6, 4).should.equal(0.10930991412457851);
    should.deepEqual(statistical.F.INV(0.0, 6, 4), error.num);
  });

  // TODO: implement
  test('F.INV.RT', function() {
    should.equal(statistical.F.INV.RT(), undefined);
  });

  // TODO: implement
  test('F.TEST', function() {
    should.equal(statistical.F.TEST(), undefined);
  });

  test('FISHER', function() {
    statistical.FISHER(0.75).should.equal(0.9729550745276566);
  });

  test('FISHERINV', function() {
    statistical.FISHERINV(0.9729550745276566).should.equal(0.75);
  });

  test('FORECAST', function() {
    statistical.FORECAST(30, [6, 7, 9, 15, 21], [20, 28, 31, 38, 40]).should.equal(10.607253086419755);
  });

  test('FREQUENCY', function() {
    should.deepEqual(statistical.FREQUENCY([
      79, 85, 78, 85,
      50, 81, 95, 88, 97
    ], [
      70, 79, 89
    ]), [1, 2, 4, 2]);
  });

  test('GAMMA', function() {
    statistical.GAMMA(2.5).should.equal(1.3293403919101043);
    statistical.GAMMA(-3.75).should.equal(0.26786611734776916);
    should.deepEqual(statistical.GAMMA(0), error.num);
    should.deepEqual(statistical.GAMMA(-2), error.num);
  });

  // TODO: implement
  test('GAMMA.DIST', function() {
    should.equal(statistical.GAMMA.DIST(), undefined);
  });

  // TODO: implement
  test('GAMMA.INV', function() {
    should.equal(statistical.GAMMA.INV(), undefined);
  });

  test('GAMMALN', function() {
    statistical.GAMMALN(4).should.equal(1.7917594692280547);
  });

  // TODO: implement
  test('GAMMALN.PRECISE', function() {
    should.equal(statistical.GAMMALN.PRECISE(), undefined);
  });

  test('GAUSS', function() {
    statistical.GAUSS(2).should.equal(0.4772498680518208);
  });

  test('GEOMEAN', function() {
    statistical.GEOMEAN([4, 5, 8, 7, 11, 4, 3]).should.equal(5.476986969656962);
  });

  test('GROWTH', function() {
    var known_y = [33100, 47300, 69000, 102000, 150000, 220000];
    var known_x = [11, 12, 13, 14, 15, 16];
    var new_x = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    should.deepEqual(statistical.GROWTH(known_y, known_x, new_x), [
      32618.203773538437,
      47729.42261474665,
      69841.30085621694,
      102197.07337883314,
      149542.4867400494,
      218821.87621460424,
      320196.7183634903,
      468536.05418408214,
      685597.3889812973
    ]);

    should.deepEqual(statistical.GROWTH(known_y), [
      32618.203773539713,
      47729.42261474775,
      69841.30085621744,
      102197.07337883241,
      149542.4867400457,
      218821.8762145953
    ]);

    should.deepEqual(statistical.GROWTH(known_y, known_x, new_x, false), [
      9546.01078362295,
      21959.574129266384,
      50515.645421859634,
      116205.8251842928,
      267319.0393588225,
      614938.7837519756,
      1414600.7282884493,
      3254137.2789414385,
      7485793.848705778
    ]);
  });

  test('HARMEAN', function() {
    statistical.HARMEAN([4, 5, 8, 7, 11, 4, 3]).should.equal(5.028375962061728);
  });

  test('HYPGEOM.DIST', function() {
    statistical.HYPGEOM.DIST(1, 4, 8, 20, true).should.equal(0.46542827657378744);
    statistical.HYPGEOM.DIST(1, 4, 8, 20, false).should.equal(0.3632610939112487);
  });

  test('INTERCEPT', function() {
    statistical.INTERCEPT([
      2, 3, 9, 1, 8
    ], [
      6, 5, 11, 7, 5
    ]).should.equal(0.04838709677419217);

    statistical.INTERCEPT([1, 2, 3], [1, 2, 3, 4]).should.equal(error.na);
  });

  test('KURT', function() {
    statistical.KURT([
      3, 4, 5, 2, 3, 4, 5, 6, 4, 7
    ]).should.equal(-0.15179963720841627);
  });

  test('LARGE', function() {
    statistical.LARGE([3, 5, 3, 5, 4], 3).should.equal(4);
  });

  test('LINEST', function() {
    var known_y = [1, 9, 5, 7];
    var known_x = [0, 4, 2, 3];
    should.deepEqual(statistical.LINEST(known_y, known_x), [
      2, 1
    ]);
  });

  // TODO: implement
  test('LOGEST', function() {
    should.equal(statistical.LOGEST(), undefined);
  });

  test('LOGNORM.DIST', function() {
    statistical.LOGNORM.DIST(4, 3.5, 1.2, true).should.equal(0.0390835557068005);
    statistical.LOGNORM.DIST(4, 3.5, 1.2, false).should.equal(0.01761759668181924);
  });

  test('LOGNORM.INV', function() {
    statistical.LOGNORM.INV(0.0390835557068005, 3.5, 1.2).should.equal(4.000000000000001);
  });

  test("MAX", function() {
    statistical.MAX().should.equal(0);
    statistical.MAX([0.1, 0.2], [0.4, 0.8], [true, false]).should.equal(0.8);
    statistical.MAX([
      [0, 0.1, 0.2],
      [0.4, 0.8, 1],
      [true, false]
    ]).should.equal(1);
  });

  test("MAXA", function() {
    statistical.MAXA().should.equal(0);
    statistical.MAXA([0.1, 0.2], [0.4, 0.8], [true, false]).should.equal(1);
    statistical.MAXA([
      [0.1, 0.2],
      [0.4, 0.8],
      [true, false]
    ]).should.equal(1);
  });

  test('MEDIAN', function() {
    statistical.MEDIAN(1, 2, 3, 4, 5).should.equal(3);
    statistical.MEDIAN(1, 2, 3, 4, 5, 6).should.equal(3.5);
  });

  test("MIN", function() {
    statistical.MIN().should.equal(0);
    statistical.MIN([0.1, 0.2], [0.4, 0.8], [true, false]).should.equal(0.1);
    statistical.MIN([0, 0.1, 0.2], [0.4, 0.8, 1], [true, false]).should.equal(0);
    statistical.MIN([
      [10, 0],
      [0.1, 0.2]
    ], [
      [10, 0.4],
      [0.8, 1]
    ], [
      [10, 10],
      [true, false]
    ]).should.equal(0);
  });

  test("MINA", function() {
    statistical.MINA().should.equal(0);
    statistical.MINA([0.1, 0.2], [0.4, 0.8], [true, false]).should.equal(0);
    statistical.MINA([
      [10, 0],
      [0.1, 0.2]
    ], [
      [10, 0.4],
      [0.8, 1]
    ], [
      [10, 10],
      [true, false]
    ]).should.equal(0);
  });

  test('MODE.MULT', function() {
    var data = [1, 2, 3, 4, 3, 2, 1, 2, 3, 5, 6, 1];
    var modes = statistical.MODE.MULT(data);
    modes.length.should.equal(3);
    modes.should.containEql(1);
    modes.should.containEql(2);
    modes.should.containEql(3);
  });

  test('MODE.SNGL', function() {
    var data = [5.6, 4, 4, 3, 2, 4];
    statistical.MODE.SNGL(data).should.equal(4);
  });

  test('NEGBINOMDIST', function() {
    statistical.NEGBINOMDIST(10, 5, 0.25, false).should.equal(0.05504866037517786);
    statistical.NEGBINOMDIST(10, 5, 0.25, true).should.equal(0.3135140584781766);
  });

  test("NORM.DIST", function() {
    statistical.NORM.DIST(1, 0, 1, false).should.equal(0.24197072451914337);
    statistical.NORM.DIST(1, 0, 1, true).should.equal(0.8413447460685429);
    statistical.NORM.DIST('Hello World!', 0, 1, false).should.equal(error.value);
    statistical.NORM.DIST(0, 'Hello World!', 1, false).should.equal(error.value);
    statistical.NORM.DIST(0, 0, 'Hello World!', false).should.equal(error.value);
    statistical.NORM.DIST(0, 0, -1, false).should.equal(error.num);
  });

  test('NORM.INV', function() {
    statistical.NORM.INV(0.908789, 40, 1.5).should.equal(42.00000200956616);
  });

  test('NORM.S.DIST', function() {
    statistical.NORM.S.DIST(1, true).should.equal(0.8413447460685429);
    statistical.NORM.S.DIST(1, false).should.equal(0.24197072451914337);
  });

  test('NORM.S.INV', function() {
    statistical.NORM.S.INV(0.908789).should.equal(1.3333346730441074);
  });

  test('PEARSON', function() {
    var independentValues = [9, 7, 5, 3, 1];
    var depentendValues = [10, 6, 1, 5, 3];
    statistical.PEARSON(independentValues, depentendValues).should.equal(0.6993786061802354);
  });

  test("PERCENTILEEXC", function() {
    statistical.PERCENTILEEXC([1, 2, 3, 4], 0).should.equal("#NUM!");
    statistical.PERCENTILEEXC([1, 2, 3, 4], 0.1).should.equal("#NUM!");
    statistical.PERCENTILEEXC([1, 2, 3, 4], 0.2).should.equal(1);
    statistical.PERCENTILEEXC([1, 2, 3, 4], 0.25).should.equal(1.25);
    statistical.PERCENTILEEXC([1, 2, 3, 4], 0.3).should.equal(1.5);
    statistical.PERCENTILEEXC([1, 2, 3, 4], 0.4).should.equal(2);
    statistical.PERCENTILEEXC([1, 2, 3, 4], 0.5).should.equal(2.5);
    statistical.PERCENTILEEXC([1, 2, 3, 4], 0.6).should.equal(3);
    statistical.PERCENTILEEXC([1, 2, 3, 4], 0.7).should.equal(3.5);
    statistical.PERCENTILEEXC([1, 2, 3, 4], 0.75).should.equal(3.75);
    statistical.PERCENTILEEXC([1, 2, 3, 4], 0.8).should.equal(4);
    statistical.PERCENTILEEXC([1, 2, 3, 4], 0.9).should.equal("#NUM!");
    statistical.PERCENTILEEXC([1, 2, 3, 4], 1).should.equal("#NUM!");
  });

  test("PERCENTILEINC", function() {
    statistical.PERCENTILEINC([1, 2, 3, 4], 0).should.equal(1);
    statistical.PERCENTILEINC([1, 2, 3, 4], 0.1).should.equal(1.3);
    statistical.PERCENTILEINC([1, 2, 3, 4], 0.2).should.equal(1.6);
    statistical.PERCENTILEINC([1, 2, 3, 4], 0.25).should.equal(1.75);
    statistical.PERCENTILEINC([1, 2, 3, 4], 0.3).should.equal(1.9);
    statistical.PERCENTILEINC([1, 2, 3, 4], 0.4).should.equal(2.2);
    statistical.PERCENTILEINC([1, 2, 3, 4], 0.5).should.equal(2.5);
    statistical.PERCENTILEINC([1, 2, 3, 4], 0.6).should.equal(2.8);
    statistical.PERCENTILEINC([1, 2, 3, 4], 0.7).should.equal(3.1);
    statistical.PERCENTILEINC([1, 2, 3, 4], 0.75).should.equal(3.25);
    statistical.PERCENTILEINC([1, 2, 3, 4], 0.8).should.equal(3.4);
    statistical.PERCENTILEINC([1, 2, 3, 4], 0.9).should.equal(3.7);
    statistical.PERCENTILEINC([1, 2, 3, 4], 1).should.equal(4);
  });

  test("PERCENTRANKEXC", function() {
    statistical.PERCENTRANKEXC([1, 2, 3, 4], 1).should.equal(0.2);
    statistical.PERCENTRANKEXC([1, 2, 3, 4], 2).should.equal(0.4);
    statistical.PERCENTRANKEXC([1, 2, 3, 4], 3).should.equal(0.6);
    statistical.PERCENTRANKEXC([1, 2, 3, 4], 4).should.equal(0.8);
    statistical.PERCENTRANKEXC([1, 2, 3, 4], 1.25).should.equal(0.25);
    statistical.PERCENTRANKEXC([1, 2, 3, 4], 2.5).should.equal(0.5);
    statistical.PERCENTRANKEXC([1, 2, 3, 4], 3.75).should.equal(0.75);
    statistical.PERCENTRANKEXC([1, 2, 3, 4], 1, 2).should.equal(0.2);
    statistical.PERCENTRANKEXC([1, 2, 3, 4], 2, 2).should.equal(0.4);
    statistical.PERCENTRANKEXC([1, 2, 3, 4], 3, 2).should.equal(0.6);
    statistical.PERCENTRANKEXC([1, 2, 3, 4], 4, 2).should.equal(0.8);
  });

  test("PERCENTRANKINC", function() {
    statistical.PERCENTRANKINC([1, 2, 3, 4], 1).should.equal(0);
    statistical.PERCENTRANKINC([1, 2, 3, 4], 2).should.equal(0.333);
    statistical.PERCENTRANKINC([1, 2, 3, 4], 3).should.equal(0.666);
    statistical.PERCENTRANKINC([1, 2, 3, 4], 4).should.equal(1);
    statistical.PERCENTRANKINC([1, 2, 3, 4], 1.25).should.equal(0.083);
    statistical.PERCENTRANKINC([1, 2, 3, 4], 2.5).should.equal(0.5);
    statistical.PERCENTRANKINC([1, 2, 3, 4], 3.75).should.equal(0.916);
    statistical.PERCENTRANKINC([1, 2, 3, 4], 1, 2).should.equal(0);
    statistical.PERCENTRANKINC([1, 2, 3, 4], 2, 2).should.equal(0.33);
    statistical.PERCENTRANKINC([1, 2, 3, 4], 3, 2).should.equal(0.66);
    statistical.PERCENTRANKINC([1, 2, 3, 4], 4, 2).should.equal(1);
  });

  test('PERMUT', function() {
    statistical.PERMUT(100, 3).should.equal(970200);
  });

  test('PERMUTATIONA', function() {
    statistical.PERMUTATIONA(3, 2).should.equal(9);
  });

  test('PHI', function() {
    statistical.PHI(0.75).should.equal(0.30113743215480443);
  });

  test('POISSONDIST', function() {
    statistical.POISSONDIST(2, 5, true).should.equal(0.12465201948308113);
    statistical.POISSONDIST(2, 5, false).should.equal(0.08422433748856833);
  });

  test('PROB', function() {
    var x = [0, 1, 2, 3];
    var prob = [0.2, 0.3, 0.1, 0.4];
    statistical.PROB(x, prob, 2).should.equal(0.1);
    statistical.PROB(x, prob, 1, 3).should.equal(0.8);
    statistical.PROB(x, prob).should.equal(0);
  });

  test('QUARTILE.EXC', function() {
    var data = [6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49];
    statistical.QUARTILE.EXC(data, 1).should.equal(15);
    statistical.QUARTILE.EXC(data, 2).should.equal(40);
    statistical.QUARTILE.EXC(data, 3).should.equal(43);
    statistical.QUARTILE.EXC(data, 4).should.equal(error.num);
  });

  test('QUARTILE.INC', function() {
    var data = [1, 2, 4, 7, 8, 9, 10, 12];
    statistical.QUARTILE.INC(data, 1).should.equal(3.5);
    statistical.QUARTILE.INC(data, 2).should.equal(7.5);
    statistical.QUARTILE.INC(data, 3).should.equal(9.25);
    statistical.QUARTILE.INC(data, 4).should.equal(error.num);
  });

  test('RANK.AVG', function() {
    var data = [89, 88, 92, 101, 94, 97, 95];
    statistical.RANK.AVG(94, data).should.equal(4);
    statistical.RANK.AVG(88, data, 1).should.equal(1);
  });

  test('RANK.EQ', function() {
    var data = [7, 3.5, 3.5, 1, 2];
    statistical.RANK.EQ(data[0], data, 1).should.equal(5);
    statistical.RANK.EQ(data[4], data).should.equal(4);
    statistical.RANK.EQ(data[1], data, 1).should.equal(3);
  });

  test('RSQ', function() {
    var y = [2, 3, 9, 1, 8, 7, 5];
    var x = [6, 5, 11, 7, 5, 4, 4];
    statistical.RSQ(y, x).should.equal(0.05795019157088122);
  });

  test('SKEW', function() {
    statistical.SKEW([3, 4, 5, 2, 3, 4, 5, 6, 4, 7]).should.equal(0.3595430714067974);
  });

  test('SKEW.P', function() {
    statistical.SKEW.P([3, 4, 5, 2, 3, 4, 5, 6, 4, 7]).should.equal(0.303193339354144);
  });

  test('SLOPE', function() {
    var data_y = [2, 3, 9, 1, 8, 7, 5];
    var data_x = [6, 5, 11, 7, 5, 4, 4];
    statistical.SLOPE(data_y, data_x).should.equal(0.3055555555555556);
  });

  test('SMALL', function() {
    statistical.SMALL([3, 4, 5, 2, 3, 4, 6, 4, 7], 4).should.equal(4);
  });

  test('STANDARDIZE', function() {
    statistical.STANDARDIZE(42, 40, 1.5).should.equal(1.3333333333333333);
    statistical.STANDARDIZE(10, 10, 10).should.equal(0);
  });

  test('STDEV.P', function() {
    var data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299];
    statistical.STDEV.P(data).should.equal(26.054558142482477);
  });

  test('STDEV.S', function() {
    var data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299, true, false, 'nope'];
    statistical.STDEV.S(data).should.equal(27.46391571984349);
  });

  test('STDEVA', function() {
    var data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299];
    statistical.STDEVA(data).should.equal(27.46391571984349);
    var data2 = [2, 1, true, false, 'nope'];
    statistical.STDEVA(data2).should.equal(0.8366600265340756);
  });

  test('STDEVPA', function() {
    var data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299];
    statistical.STDEVPA(data).should.equal(26.054558142482477);
    var data2 = [2, 1, true, false, 'nope'];
    statistical.STDEVPA(data2).should.equal(0.7483314773547883);
  });

  test('STEYX', function() {
    var data_y = [2, 3, 9, 1, 8, 7, 5];
    var data_x = [6, 5, 11, 7, 5, 4, 4];
    statistical.STEYX(data_y, data_x).should.equal(3.305718950210041);
  });

  test('T.DIST', function() {
    statistical.T.DIST(60, 1, true).should.equal(0.9946953263673741);
    statistical.T.DIST(8, 3, false).should.equal(0.0007369065188787021);
  });

  // TODO: implement
  test('T.DIST.2T', function() {
    should.equal(statistical.T.DIST['2T'](), undefined);
  });

  // TODO: implement
  test('T.DIST.RT', function() {
    should.equal(statistical.T.DIST.RT(), undefined);
  });

  test('T.INV', function() {
    statistical.T.INV(0.9, 60).should.equal(1.2958210933417948);
  });

  // TODO: implement
  test('T.INV.2T', function() {
    should.equal(statistical.T.INV['2T'](), undefined);
  });

  // TODO: implement
  test('T.TEST', function() {
    should.equal(statistical.T.TEST(), undefined);
  });

  // TODO: implement
  test('TREND', function() {
    should.equal(statistical.TREND(), undefined);
  });

  test("TRIMMEAN", function() {
    statistical.TRIMMEAN([4, 5, 6, 7, 2, 3, 4, 5, 1, 2, 3], 0.2).should.equal(3.7777777777777777);
  });

  test('VAR.P', function() {
    statistical.VAR.P(1, 2, 3, 4, 10, 10).should.equal(13.333333333333334);
    statistical.VAR.P(1, 2, 3, 4, false, true).should.equal(1.25);
    statistical.VAR.P(1, 2, 3, 4, 'count as zero', false, true).should.equal(1.25);
  });

  test('VAR.S', function() {
    statistical.VAR.S(1, 2, 3, 4, 10, 10).should.equal(16);
    statistical.VAR.S(1, 2, 3, 4, false, true).should.equal(1.6666666666666667);
    statistical.VAR.S(1, 2, 3, 4, 'count as zero', false, true).should.equal(1.6666666666666667);
  });

  test('VARA', function() {
    statistical.VARA(1, 2, 3, 4, 10, 10).should.equal(16);
    statistical.VARA(1, 2, 3, 4, false, true).should.equal(2.166666666666667);
    statistical.VARA(1, 2, 3, 4, 'count as zero', false, true).should.equal(2.285714285714286);
  });

  test('VARPA', function() {
    statistical.VARPA(1, 2, 3, 4, 10, 10).should.equal(13.333333333333334);
    statistical.VARPA(1, 2, 3, 4, false, true).should.equal(1.8055555555555556);
    statistical.VARPA(1, 2, 3, 4, 'count as zero', false, true).should.equal(1.959183673469388);
  });

  test('WEIBULLDIST', function() {
    statistical.WEIBULLDIST(105, 20, 100, true).should.equal(0.9295813900692769);
    statistical.WEIBULLDIST(105, 20, 100, false).should.equal(0.03558886402450435);
  });

  test('Z.TEST', function() {
    var data = [3, 6, 7, 8, 6, 5, 4, 2, 1, 9];
    statistical.Z.TEST(data, 4).should.equal(0.09057419685136381);
    statistical.Z.TEST(data, 6).should.equal(0.86304338912953);
  });
});