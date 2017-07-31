var express = require('express');
var router = express.Router();
var Cylon = require('cylon');
//var Home = require('../controllers/home');

// METHOD'S
// GET
Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/tty.usbmodem20' }
  },

  devices: {
   servo: { driver: 'servo', pin: 9 },
   servo2: { driver: 'servo', pin: 10 },
   servo3: { driver: 'servo', pin: 11 },
   servo4: { driver: 'servo', pin: 12 },
   servo5: { driver: 'servo', pin: 13 }
 },

 work: function(my) {
   router.post('/', led);
   router.post('/servo', servo);

   function led (req, res) {
     var d = req.body;
     if (d.value == true) {
       my.led.turnOn();
       res.json('prendido');
     } else {
       my.led.turnOff();
       res.json('apagado');
     }
   }

   function servo (req, res) {
     var d = req.body;
     var angle = d.value;
     if (d.id == 1) {
       my.servo.angle(angle);
       res.json(angle);
       console.log('servo 1');
     }
     if (d.id == 2) {
       my.servo2.angle(angle);
       res.json(angle);
       console.log('servo 2');

     }
     if (d.id == 3) {
       my.servo3.angle(angle);
       res.json(angle);
       console.log('servo 3');

     }
     if (d.id == 4) {
       my.servo4.angle(angle);
       res.json(angle);
       console.log('servo 4');

     }
     if (d.id == 5) {
       my.servo5.angle(angle);
       res.json(angle);
     }
   }
 }
})
.start();




module.exports = router;
