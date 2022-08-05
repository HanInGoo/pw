var push=require('web-push');

let vapidKeys={
    publicKey: 'BHpQcLOzSDR8saEsbej2cN18LVIVciPRz8QyvuhWIjGvg4PXRzYHShf165UYRjhRYD4Vnq6IrC6GAaZFmT4iUso',
    privateKey: '2B9MoIhq2WJ6RuT5gYmpjJ5bwJp2B359uAAA2ctYCQY'
  }

push.setVapidDetails('mailto:test@cod.co.uk',vapidKeys.publicKey, vapidKeys.privateKey)

let sub={};

push.sendNotification(sub, 'test message')