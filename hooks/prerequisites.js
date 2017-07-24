module.exports = function (context) {
	var child_process = context.requireCordovaModule('child_process'),
         deferral = context.requireCordovaModule('q').defer();

child_process.exec('npm install', {cwd:__dirname},
		function (error) {
			if (error !== null) {
			  console.log('exec error: ' + error);
			  deferral.reject('npm installation failed');
			}
			deferral.resolve();
	});

  return deferral.promise;
};
