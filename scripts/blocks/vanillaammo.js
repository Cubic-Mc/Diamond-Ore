
const cycloneCryoFrag = extend(BasicBulletType, {});
cycloneCryoFrag.damage = 8;
cycloneCryoFrag.bulletWidth = 3;
cycloneCryoFrag.bulletHeight = 6;
cycloneCryoFrag.lifetime = 45;
cycloneCryoFrag.drag = 0.015;
cycloneCryoFrag.pierce = true;
cycloneCryoFrag.despawnEffect = Fx.none;
cycloneCryoFrag.hitEffect = Fx.none;
cycloneCryoFrag.frontColor = Color.valueOf("#4496bb");
cycloneCryoFrag.backColor = Color.valueOf("#4499ee");
cycloneCryoFrag.bulletSprite = "diamond-ore-diamondbullet";
cycloneCryoFrag.status = StatusEffects.freezing;
const cycloneCryo = extend(FlakBulletType, {});
cycloneCryo.fragBullet = cycloneCryoFrag;
cycloneCryo.fragBullets = 6;
cycloneCryo.status = StatusEffects.freezing;
cycloneCryo.splashDamage = 15;
cycloneCryo.damage = 15;
cycloneCryo.speed = 4;
cycloneCryo.splashDamageRadius = 16;
cycloneCryo.bulletSprite = "diamond-ore-diamondshell";
const spectreCryo = extend(BasicBulletType, {});
spectreCryo.speed = 4;
spectreCryo.status = StatusEffects.freezing;
spectreCryo.splashDamage = 20;
spectreCryo.damage = 30;
spectreCryo.splashDamageRadius = 16;
spectreCryo.bulletWidth = 12;
spectreCryo.bulletHeight = 24;
spectreCryo.bulletSprite = "diamond-ore-diamondbullet";
spectreCryo.frontColor = Color.valueOf("#cceeff");
spectreCryo.backColor = Color.valueOf("#4499ee");
init(){
	this.super$init();
	Blocks.cyclone.put(Vars.content.getByName(ContentType.item,"diamond-ore-cryogem"),cycloneCryo);
	Blocks.spectre.put(Vars.content.getByName(ContentType.item,"diamond-ore-cryogem"),spectreCryo);
}