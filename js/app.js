(function(){

	var app = {
		status:false,

		init(){
			this.listener();
		},

		listener(){
			$('#icone-phone').on('click',this.toogle.bind(this));
		},

		toogle(){
			this.status = !this.status;
			if(this.status){
				$('.menu-phone').show("blind",1000);
			}else {
				$('.menu-phone').hide("blind",1000);
			}
			
		}
	}

	app.init();
})();