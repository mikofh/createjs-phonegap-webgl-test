var app = {

	newInitialize2: function() {
		alert("init");
		//miko denne er til device: this.bindEvents();
		this.canvas;
		this.stage;
		this.katSS;
		this.kat;
		this.hitArea;
		this.preload;
		this.manifest;
		this.mySpriteContainer;
		this.bitmap;
		this.receivedEvent('deviceready');

	},
	bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        alert("running");
		//assets = [];
		app.canvas = document.getElementById("canvas");

		//billeder skal preloades så jquery fungerer
		app.manifest = [
	        {src:"images/Landscape-Background.jpg", id:"background"},
	        {src:"images/kat.png", id:"kat_ss"}
	    ];
	    app.preload = new createjs.LoadQueue(true);
	    //preload.on("fileload", handleFileLoad);
	    app.preload.on("complete", app.handleComplete);
	    app.preload.loadManifest(app.manifest);

	    //resten kører i handleComplete
        
    },
	handleTick: function() {
	    	app.stage.update();
	},
	katClick: function(e){
		app.kat.gotoAndPlay("startRight");
	},
	onKatMouseOver: function(e){
		app.kat.gotoAndPlay('startRight');
		app.kat.cursor = "pointer";
	},
	handleComplete: function(event) {
		//alert("go");
		//var bitmap = new createjs.Bitmap("images/Landscape-Background.jpg");
		app.bitmap = new createjs.Bitmap(app.preload.getResult('background'));
		app.bitmap.width = app.canvas.width;
		app.bitmap.height = app.canvas.height;
		
		app.katSS = new createjs.SpriteSheet({
			//images: ["kat.png"], 
			images: [app.preload.getResult('kat_ss')],
			frames: [[0,0,233,300,0,120.30000000000001,129.9],[233,0,233,300,0,120.30000000000001,129.9],[466,0,233,300,0,120.30000000000001,129.9],[699,0,233,305,0,120.30000000000001,134.9],[932,0,233,303,0,120.30000000000001,132.9],[1165,0,233,305,0,120.30000000000001,134.9],[1398,0,233,305,0,120.30000000000001,134.9],[1631,0,233,305,0,120.30000000000001,134.9],[0,305,233,303,0,120.30000000000001,132.9],[233,305,233,303,0,120.30000000000001,132.9],[466,305,233,303,0,120.30000000000001,132.9],[699,305,234,294,0,107.30000000000001,133.9],[933,305,210,289,0,98.30000000000001,130.9],[1143,305,182,286,0,84.30000000000001,127.9],[1325,305,147,281,0,66.30000000000001,122.9],[1472,305,131,288,0,52.30000000000001,125.9],[1603,305,140,289,0,64.30000000000001,126.9],[1743,305,169,295,0,81.30000000000001,127.9],[0,608,189,298,0,101.30000000000001,127.9],[189,608,209,300,0,110.30000000000001,127.9],[398,608,233,303,0,120.30000000000001,132.9],[631,608,189,306,0,107.30000000000001,134.9],[820,608,163,307,0,92.30000000000001,136.9],[983,608,208,308,0,108.30000000000001,138.9],[1191,608,216,300,0,107.30000000000001,138.9],[1407,608,234,294,0,107.30000000000001,133.9],[1641,608,210,289,0,98.30000000000001,130.9],[1851,608,182,286,0,84.30000000000001,127.9],[0,916,147,281,0,66.30000000000001,122.9],[147,916,131,288,0,52.30000000000001,125.9],[278,916,164,299,0,66.30000000000001,136.9],[442,916,204,309,0,86.30000000000001,146.9],[646,916,249,304,0,110.30000000000001,143.9],[895,916,280,286,0,125.30000000000001,133.9],[1175,916,297,287,0,135.3,130.9],[1472,916,301,285,0,138.3,127.9],[1773,916,227,283,0,101.30000000000001,122.9],[0,1225,131,287,0,52.30000000000001,125.9],[131,1225,131,299,0,52.30000000000001,136.9],[262,1225,153,307,0,71.30000000000001,146.9],[415,1225,196,303,0,92.30000000000001,143.9],[611,1225,209,300,0,66.30000000000001,127.9],[820,1225,209,300,0,66.30000000000001,127.9],[1029,1225,209,300,0,66.30000000000001,127.9],[1238,1225,209,305,0,66.30000000000001,132.9],[1447,1225,209,303,0,66.30000000000001,130.9],[1656,1225,209,305,0,66.30000000000001,132.9],[0,1532,209,305,0,66.30000000000001,132.9],[209,1532,209,305,0,66.30000000000001,132.9],[418,1532,209,303,0,66.30000000000001,130.9],[627,1532,209,303,0,66.30000000000001,130.9],[836,1532,209,303,0,66.30000000000001,130.9],[1045,1532,234,294,0,99.30000000000001,133.9],[1279,1532,210,289,0,79.30000000000001,130.9],[1489,1532,182,286,0,65.30000000000001,127.9],[1671,1532,147,281,0,48.30000000000001,122.9],[1818,1532,131,288,0,46.30000000000001,125.9],[0,1837,140,289,0,43.30000000000001,126.9],[140,1837,169,295,0,55.30000000000001,127.9],[309,1837,189,298,0,55.30000000000001,127.9],[498,1837,209,300,0,66.30000000000001,127.9],[707,1837,233,303,0,80.30000000000001,132.9],[940,1837,189,306,0,49.30000000000001,134.9],[1129,1837,163,307,0,38.30000000000001,136.9],[1292,1837,208,308,0,67.30000000000001,138.9],[1500,1837,217,300,0,76.30000000000001,138.9],[1717,1837,234,294,0,94.30000000000001,133.9],[0,2145,210,289,0,79.30000000000001,130.9],[210,2145,182,286,0,65.30000000000001,127.9],[392,2145,147,281,0,48.30000000000001,122.9],[539,2145,131,288,0,46.30000000000001,125.9],[670,2145,165,299,0,65.30000000000001,136.9],[835,2145,204,309,0,85.30000000000001,146.9],[1039,2145,249,304,0,106.30000000000001,143.9],[1288,2145,280,286,0,122.30000000000001,133.9],[1568,2145,297,287,0,129.3,130.9],[0,2454,301,285,0,130.3,127.9],[301,2454,227,283,0,93.30000000000001,122.9],[528,2454,131,287,0,46.30000000000001,125.9],[659,2454,131,299,0,46.30000000000001,136.9],[790,2454,153,307,0,48.30000000000001,146.9],[943,2454,196,303,0,71.30000000000001,143.9],[1139,2454,196,302,0,74.30000000000001,142.9],[1335,2454,190,297,0,69.30000000000001,132.9],[1525,2454,210,300,0,86.30000000000001,135.9],[1735,2454,234,294,0,107.30000000000001,133.9],[0,2761,234,294,0,107.30000000000001,133.9],[234,2761,210,300,0,86.30000000000001,135.9],[444,2761,190,297,0,69.30000000000001,132.9],[634,2761,196,302,0,74.30000000000001,142.9]],
			animations: {
				ambientRight:[0,10],
				startRight: [21,24, "walkRight"],
				walkRight: [25,40, "ambientRight"]
			}
		});

		app.mySpriteContainer = new createjs.SpriteContainer(app.katSS);

		app.kat = new createjs.Sprite(app.katSS,'ambientRight');
		app.kat.regX=0;
		app.kat.regY=0;
		//kat.gotoAndPlay('ambientRight');
		app.stage = new createjs.SpriteStage(app.canvas);
		app.stage.enableMouseOver();
	 	//stage = new createjs.Stage(canvas);
	 	//stage.enableMouseOver(10);
	 	app.kat.x = 200;
	 	app.kat.y = 300;

	 	//hitArea = new createjs.Shape();
		//hitArea.graphics.beginFill("#FFF").drawRect(-200,-200,400,400);
	    //kat.hitArea = hitArea;
	    app.kat.on("mousedown", app.katClick);
	    app.kat.on("mouseover", app.onKatMouseOver);


	 	app.mySpriteContainer.addChild(app.kat);
	 	//kat.addEventListener('click',katClick);
	 	//kat.addEventListener('mouseover', onKatMouseOver);
		//stage.enableMouseOver( 10 );
		app.stage.addChild(app.bitmap);
		app.stage.addChild(app.mySpriteContainer);
		//miko cache betyder, at den fastlåses i sin animation, så det bliver mere smooth
		//til gengæld mistes alle lyttere .on() da objektet nu er cached. 
	    //kat.cache(200,200,233,300);
		app.stage.update();
		//$("window").location.reload();
		//location.reload();
		
		// add the listener to window, so we can do some work before updating the stage:
		createjs.Ticker.setFPS(24);
		createjs.Ticker.addEventListener("tick", app.handleTick);


	}
};