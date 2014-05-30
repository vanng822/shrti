shrti
=====
Converting a number to a base36 string

## Example (see also http://shrti.isgoodness.com/ )
	var shrti = require('shrti');
	// nodejs bin/mapping.js
	var mapping = [ '3foayirxqw6dc4tz7109uknepb8mhl2j5svg',
                  'mt8nkfd4l5xgb12vjo93izq6wsr70uapceyh',
                  'gsthf3d95wbci8427emy0jno6xqkuazr1lvp',
                  'vgqf2eh8az5l7kroiuywnd9tp0s41jbm3cx6',
                  'akro6z9p1ct8m5vlqeinb3gu7hd4y20wxsfj',
                  'ipkyq7uf5enxsgwjhrvt9oc034am68bl2dz1',
                  'ri176daepl2c985xybnj0sovmgzqtufh43wk',
                  'norhd6l5xf8z0a2tjp13m7q9b4ivkeswuygc',
                  'en7j9t6hyvq40drwxzbk3gupm1cof8si5la2',
                  'z5yvhnm8a02eusr4cft1wq9xilb76k3pogjd',
                  'j9sktwv3a4q0uyfb71h5zx8oglrdecnp6m2i',
                  'g5zcn6t978aykuejw0dxrm3ob1fqshlp4vi2',
                  'fz8a52jwuodlxek4ri7m0bpqn1ht3csv69gy',
                  'aoy1jqfhszriwg8c95m7p6lx2unk0v4d3etb',
                  'e6b7yrpm1dsio95fhjt0ncx4wuvlk8a3q2gz',
                  'scvkw8ohry734j1g0ifdxtl5pabeu9qn6z2m' ];
	shrti.setMapping(mapping);
	console.log(shrti.encode(57101310));
	// => shrti
	console.log(shrti.decode('shrti'));
	// => 57101310
	console.log(shrti.encode(9007199254740992));
	// => oj61tfg87c6
