﻿/**
 * Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Just put the name of your custom skin here.
	config.skin = location.search.match(/[&?]old([&=]|$)/) ? 'kama' : 'ozone';
};

