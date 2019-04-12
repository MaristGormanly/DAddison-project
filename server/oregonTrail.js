const express = require('express')
const app = express()
app.use(express.static('client/public'));
const port = 1337

app.get('/', function (req, res) { res.sendFile('index.html',
{root: './client/views' })
})

app.get('/mainmenu.html', function (req, res) { res.sendFile('mainmenu.html',
{root: './client/views' })
})

app.get('/setup.html', function (req, res) { res.sendFile('setup.html',
{root: './client/views' })
})

app.get('/topten.html', function (req, res) { res.sendFile('topten.html',
{root: './client/views' })
})

app.get('/trail.html', function (req, res) { res.sendFile('trail.html',
{root: './client/views' })
})

var gameController = require("../Controllers/gameController.js");
var setupController = require("../Controllers/setupController.js");
var topTenController = require("../Controllers/topTenController.js");

app.route('/api/setup/player')
  .get(setupController.getAllPlayerNames)
  .post(setupController.savePlayerName);

app.route('/api/gameData/playerStatus')
  .get(gameController.getPlayerStatus);

app.route('/api/setup/playerProfession')
  .get(setupController.getPlayerProfession)
  .post(setupController.saveProfession);

app.route('/api/setup/playerMoney')
  .get(setupController.getPlayerMoney)
  .post(setupController.saveplayerMoney)
  .patch(setupController.updateplayerMoney);

app.route('/api/setup/startMonth)
  .get(setupController.getStartMonth)
  .post(setupController.saveStartMonth);

app.route('/api/gameData/mileTravled)
  .get(gameController.getMilesTraveled)
  .post(gameController.saveMilesTraveled)
  .patch(gameController.updateMilesTraveled);

app.route('/api/gameData/groupHealth)
  .get(gameController.getGroupHealth)
  .post(gameController.saveGroupHealth)
  .patch(gameController.updateGroupHealth);

app.route('/api/setup/currentPace)
  .get(setupController.getCurrentPace)
  .post(setupController.saveCurrentPace)
  .patch(setupController.updateCurrentPace);

app.route('/api/gameData/daysOnTrail)
  .get(gameController.getDaysOnTrail)
  .post(gameController.saveDaysOnTrail)
  .patch(setupController.updateDaysOnTrail);

app.route('/api/gameData/currentWeather)
  .get(gameController.getCurrentWeather)
  .post(gameController.saveCurrentWeather);
  .patch(setupController.updateCurrentWeather);

app.route('/api/gameData/currentTerrain)
  .get(gameController.getCurrentTerrain)
  .post(gameController.saveCurrentTerrain);
  .patch(setupController.updateCurrentTerrain);

app.route('/api/gameData/messages)
  .get(gameController.getMessages)
  .post(gameController.saveMessages);
  .patch(setupController.updateMessages);

/*app.route('/api/setup/player/:id')
  .get(setupController.getPlayerName)
  .patch(setupController.changePlayerName)
  .delete(setupController.deletePlayerName);
*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
