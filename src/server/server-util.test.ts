import { ServerUtil } from 'server-util';
describe('server util tests', () => {
    it('test if ua is mobile', () => {
        // GIVEN
        const ua = 'android';
        // WHEN
        const res = ServerUtil.isMobile(ua);
        // THEN
        expect(res).toEqual(true);
    });
});
