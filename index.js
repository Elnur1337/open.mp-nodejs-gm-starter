const samp = require("samp-node-lib");

console.log("ELNURDEV TEST");

samp.OnGameModeInit(() => { 
    samp.AddPlayerClass(0, 2095.5671, 1433.1622, 10.8203, 92.4388, 0, 0, 0, 0, 0, 0);
    samp.AddStaticVehicle(522, 2095.5671, 1433.1622, 11.8203, 270.8069, -1, -1);
    return true;
});

samp.OnPlayerRequestClass((playerid) => {
    samp.SetPlayerPos(playerid, 2095.5671, 1433.1622, 10.8203);
	samp.SetPlayerFacingAngle(playerid, 113.8861);
	samp.SetPlayerInterior(playerid, 0);
	return true;
});
samp.OnPlayerSpawn((playerid) => {
    samp.SetPlayerInterior(playerid, 0);
    samp.SetPlayerPos(playerid, 2099.8894,1387.0828,10.8203);
	return true;
});
