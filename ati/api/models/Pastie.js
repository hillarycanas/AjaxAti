/**
 * Pastie.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	title:{
		type:'string',
		defaultsTo:'No-title',
	},
	owner:{
		type:'string',
		required:true,
			
	}, 
	privacy:{
		type:'boolean',
		defaultsTo:false,
	},
	content:{
		type:'string',
		defaultsTo:'Empty',
	}

  }
};

