// import { compose } from 'redux';

// describe('Compose test suite', () => {
//   it('Should return value using compose function', () => {
//     function f0() {
//       return () => 1;
//     }

//     function f1(b) {
//       return () => b() + 1;
//     }

//     function f2(a) {
//       return () => a() + 1;
//     }

//     const enhance = compose(
//       f1,
//       f2,
//     );

//     const enhanceResult = enhance(f0());

//     expect(enhanceResult()).toMatchSnapshot();
//   });
// });
