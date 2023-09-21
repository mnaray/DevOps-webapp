import { expect, test } from 'vitest';
import { APIFetch } from './APIFetch';

test('Tests if returned var isnt "', () => {
	expect(APIFetch('', 'general')).not.toBe([]);
});
