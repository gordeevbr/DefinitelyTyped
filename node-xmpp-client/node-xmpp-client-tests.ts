import {Client} from './index';

let client = new Client({
    jid: 'user@example.com',
    password: 'password'
});

client.on('online', function () {
    console.log('online')
});

client.on('stanza', function (stanza) {
    console.log('Incoming stanza: ', stanza.toString())
});

let stanza = new Client.Stanza('chat', {})
    .c('show').t('chat').up()
    .c('status').t('message');
this.client.send(stanza);

client.end();
