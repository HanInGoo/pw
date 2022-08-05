var push=require('web-push');

let vapidKeys={
    publicKey: 'BHpQcLOzSDR8saEsbej2cN18LVIVciPRz8QyvuhWIjGvg4PXRzYHShf165UYRjhRYD4Vnq6IrC6GAaZFmT4iUso',
    privateKey: '2B9MoIhq2WJ6RuT5gYmpjJ5bwJp2B359uAAA2ctYCQY'
  }

push.setVapidDetails(
    'mailto:test@cod.co.uk',
    vapidKeys.publicKey, 
    vapidKeys.privateKey
);

let sub={ 
    endpoint :"https://fcm.googleapis.com/fcm/send/d2RoqsYnT-I:APA91bHR8WIK-RlZp64jCg0Gnt31g2XNPuCXde2XzMeqJNZebvAEngS7XK9eo4LTfrgHtu2jbWNplAgVnM4fpFbw0pf82ZeZx8b8DRAM8A4ITpCLasjBw88P4t-e_Gt_L0Yni6DH8_xY",
    expirationTime:null,
    keys:{
        p256dh:"BBdJBxq6mwZulVpyLk0C0LoDAvMPN7EUjDof4LjXcw60vo-0Vzh7BffEz0S607jIxnblORVCqPDL_HEZqT6mhZk",auth:"tpxq6kSQNjG6OH6AqLrniw"
    }
};

push.sendNotification(sub, 'test message')