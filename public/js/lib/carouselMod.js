/*
	@author : Ezell Burke
	@date : 10/18/2013
	@moduleName : carouselMod
	@description : This is a Module that will bascially take in any set of images and turn them into a carousel
*/

define(function(){

	Carousel = function(){
		var images = [];
		var rightButtonC = $();
		var leftButtonC  = $();
		var that = this;
		var clickNum = 0;
		var xvalFor6th = {};
		var xvalFor1th = {};
		var leftFlag =  false;
		var rightFlag =  false;
		var CurrentNum = 0;
		var state1 = false;
		var state2 = false;
		var state3 = false;
		// array to hold the value array
		var valueArray = [];
		

		var Space1 =  {"name":"space1", "pos":-755, "element":"", "empty":true}
		var Space2 =  {"name":"space2", "pos":-169, "element":"",  "empty":true}
		var Space3 =  {"name":"space3", "pos":417, "element":"", "empty":true}
		var Space4 =  {"name":"space4", "pos":1003, "element":"",  "empty":true}
		var Space5 =  {"name":"space5", "pos":1589, "element":"",  "empty":true}
		var Space6 =  {"name":"space5", "pos":2175, "element":"",  "empty":true}

		var color1Btn = $("#color1Btn");
		var color2Btn = $("#color2Btn");
		var color3Btn = $("#color3Btn");
		var color4Btn = $("#color4Btn");
		var color5Btn = $("#color5Btn");
		var color6Btn = $("#color6Btn");

		var flowerInfoTitle = $("#flowerInfoTitle");
		var infoText = $("#infoText");
		var priceComboText = $("#priceComboText");





		color1Btn.click(function(){
			// so this function will be for the first position in the middle 

			findRose("hundredRoses1");
			
		});

		color2Btn.click(function(){
			// so this function will be for the first position in the middle 

			findRose("hundredRoses2");

		});


		color3Btn.click(function(){
			// so this function will be for the first position in the middle 


			findRose("hundredRoses3");

		});

		color4Btn.click(function(){
			// so this function will be for the first position in the middle 
			findRose("hundredRoses4");

		});

		color5Btn.click(function(){
			// so this function will be for the first position in the middle 

			findRose("hundredRoses5");

		});
		color6Btn.click(function(){
			// so this function will be for the first position in the middle 

			findRose("hundredRoses6");

		});

		function findRose(found){
			//what do we need to find
			var foundIt = found;
			var current = "";
			for(var i=0; i < images.length; i++){
				//first we need to find out whats in the middle position
					console.log(images[i].css("left"))
				if(parseInt(images[i].css("left")) === Space3.pos ){
					current = images[i].attr("id");
				}

				//ok we know what is in the position now we need to navigate to it
			}

			if(current != foundIt){
				// tween to the next one
				clickNum++;
				TweenLite.to(images, .5, {left:"-=586px",onComplete:completeHandlerForfind, onCompleteParams:[foundIt]});
				console.log("we are going left");
				rightButtonC.unbind("click");
				leftButtonC.unbind("click");
				leftFlag = true;
				rightFlag = false;
			}else{
				console.log("found it");
			}


		}

		function completeHandlerForfind(foundIt){
					// this has to be after the second move

			rightButtonC.bind("click", that.goleft);
			leftButtonC.bind("click", that.goRight);

			
				var element = images.shift();
					// ok now that we have the shifted element lets get this into the 4th spot
					element.css("left", xvalFor6th.left);
					
					images.push(element);
					rightFlag = false;
					CurrentNum = clickNum;
					var current = "";
			for(var i=0; i < images.length; i++){
				//first we need to find out whats in the middle position
				if(parseInt(images[i].css("left")) === Space3.pos ){
					current = images[i].attr("id");
					console.log("the middle id is "+current);
				}

				//ok we know what is in the position now we need to navigate to it
			}

			//now lets look through the value array for the id and use that to fill in values
			
			for(var j=0; j < valueArray.length; j++){

				if(current === valueArray[j].imgId){
					console.log(valueArray[j].imgId);
					flowerInfoTitle.html(valueArray[j].title);
					infoText.html(valueArray[j].contentText);
					priceComboText.html("$"+valueArray[j].Price);

				}
			}
					findRose(foundIt)
		}
		
		 
		// var green = document.getElementById("green");
		// images.push(red);
		// images.push(yellow);
		// images.push(green);
		this.goLeft = function(){

			console.log(images)
			clickNum++;
			TweenLite.to(images, 1, {left:"-=586px",onComplete:completeHandler});
			console.log("we are going left");
			rightButtonC.unbind("click");
			leftButtonC.unbind("click");
			leftFlag = true;
			rightFlag = false;

			
			
			//now lets look through the value array for the id and use that to fill in values
			
			


			
		}


		this.goRight = function(){
			
			TweenLite.to(images, 1, {left:"+=586px",onComplete:completeHandler});
			//console.log("we are going right");
			rightButtonC.unbind("click");
			leftButtonC.unbind("click");
			rightFlag = true;
			leftFlag = false;


		}

		function sayHi(){
			console.log("hi");
		}
 
		function completeHandler(){
			

			rightButtonC.bind("click", that.goLeft);
			leftButtonC.bind("click", that.goRight);

			if(leftFlag === true){
				
				// we have not been going left
				// this has to be after the second move
			
				var element = images.shift();
					// ok now that we have the shifted element lets get this into the 4th spot
					element.css("left", xvalFor6th.left);
					
					images.push(element);
					rightFlag = false;
					CurrentNum = clickNum;

			}

			if(rightFlag === true ){
				
				// we have not been going left
				// this has to be after the second move
				console.log("ok right is true")
				var element = images.pop();
					// ok now that we have the shifted element lets get this into the 4th spot
					element.css("left", xvalFor1th.left);
					//console.log(element)
					images.unshift(element);
					//console.log(images);
					leftFlag = false;
					

			}



		
				
				
				
				$("#containerDetailed").append(element);

				var current = "";
			for(var i=0; i < images.length; i++){
				//first we need to find out whats in the middle position
				if(parseInt(images[i].css("left")) === Space3.pos ){
					current = images[i].attr("id");
					console.log("the middle id is "+current);
				}

				//ok we know what is in the position now we need to navigate to it
			}

			//now lets look through the value array for the id and use that to fill in values
			
			for(var j=0; j < valueArray.length; j++){

				if(current === valueArray[j].imgId){
					console.log(valueArray[j].imgId);
					flowerInfoTitle.html(valueArray[j].title);
					infoText.html(valueArray[j].contentText);
					priceComboText.html("$"+valueArray[j].Price);

				}
			}
				
				
				//console.log(images);
			


			
			
		}
		

		
		this.setup = function(pathToData, imageSet, leftButton, rightButton, type, container){
			//set listeners for the objects
			rightButtonC = rightButton;
			leftButtonC = leftButton;
			rightButtonC.bind("click", this.goLeft);
			leftButtonC.bind("click", this.goRight);
			console.log("this is the path "+ pathToData);
			space = imageSet;
			$.getJSON(pathToData, function(data){
				//console.log(data);
				$.each(data, function(key, value){
							//this is defineintly the way to go with this whole thing
							
								console.log(space)
								
								if(space === key){
									valueArray = value;
									//console.log("we got "+value.length);
									for(var i=0; i < value.length; i++){
										var myImage = $('<img id="'+value[i].imgId+'" border="0" src="'+value[i].img+'" width="'+value[i].width+'" height="'+value[i].height+'" style="position:absolute; top:90px; z-index:0">');
										console.log(value[i].img);
										// if this image is the first images lets take the backgound and turn it blie so we can see what we are doing
										container.append(myImage);
										images.push(myImage);
										if(i === 0){
											
											flowerInfoTitle.html(value[i].title);
											infoText.html(value[i].contentText);
											priceComboText.html("$"+value[i].Price);
										}
										
										switch(type){
											case "linear-looping":
											var width = parseInt(images[i].css("width"));
											
											var offset = -755;
											var spaceBetween = 280;
											var num = (offset) + (i * (spaceBetween + width));
												images[i].css("left", num );
												console.log(num)

											break;
										}
										////console.log("we are now at :"+value[i].space)
										}
									
									// lets get the left of the last element this is where the element will be put into when it gets shifted out of the array
									var imgNum = images.length -1;
									xvalFor6th.left  = parseInt(images[imgNum].css("left"));
									xvalFor1th.left  = parseInt(images[0].css("left"));
									// console.log(images[0].css("left"));
									state1 = true;


									console.log("this is the value of the last element "+ xvalFor1th.left);
								 };
							
							
							
						});
				
				
			});

		}

		
	}
	return Carousel;
});