import test from 'ava'
import split from './'

test('main', t => {
	t.same(split('wow'), ['wow'])
	t.same(split('woow  '), ['woow'])
	t.same(split('   '), [''])
	t.same(split('foo bar zoo'), ['foo', 'bar zoo'])
})
