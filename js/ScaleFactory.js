function ScaleFactory()
{
	this.scales = new Array(9);
	this.scales[0] = this.buildMajorScale();
	this.scales[1] = this.buildHarmonicMinorScale();
	this.scales[2] = this.buildMelodicMinorScale();
	this.scales[3] = this.buildHarmonicMajorScale();
	this.scales[4] = this.buildNeapolitanMinorScale();
	this.scales[5] = this.buildDoubleHarmonicMajorScale();
	this.scales[6] = this.buildNeapolitanMajorScale();
	this.scales[7] = this.buildHungarianMajorScale();
	this.scales[8] = this.buildAerycrianScale();
}

ScaleFactory.prototype.buildMajorScale = function ScaleFactory_buildMajorScale()
{
	var modes = new Array(6);
	modes[0] = new Mode("Lydian", [ 0, 2, 4, 6, 7, 9, 11 ]);
	modes[1] = new Mode("Ionian", [ 0, 2, 4, 5, 7, 9, 11 ]);
	modes[2] = new Mode("Mixolydian", [ 0, 2, 4, 5, 7, 9, 10 ]);
	modes[3] = new Mode("Dorian", [ 0, 2, 3, 5, 7, 9, 10 ]);
	modes[4] = new Mode("Aeolian", [ 0, 2, 3, 5, 7, 8, 10 ]);
	modes[5] = new Mode("Phrygian", [ 0, 1, 3, 5, 7, 8, 10 ]);
	return new Scale("Major", modes);
}

ScaleFactory.prototype.buildHarmonicMinorScale = function ScaleFactory_buildHarmonicMinorScale()
{
	var modes = new Array(4);
	modes[0] = new Mode("Harmonic Minor / Aeolian major 7", [ 0, 2, 3, 5, 7, 8, 11 ]);
	modes[1] = new Mode("Phrygian Dominant", [ 0, 1, 4, 5, 7, 8, 10 ]);
	modes[2] = new Mode("Lydian #2", [ 0, 3, 4, 6, 7, 9, 11 ]);
	modes[3] = new Mode("Dorian #4 / Lydian Minor b7", [ 0, 2, 3, 6, 7, 9, 10 ]);
	return new Scale("Marmonic Minor", modes);
}

ScaleFactory.prototype.buildMelodicMinorScale = function ScaleFactory_buildMelodicMinorScale()
{
	var modes = new Array(4);
	modes[0] = new Mode("Melodic Minor / Ionian Minor", [ 0, 2, 3, 5, 7, 9, 11 ]);
	modes[1] = new Mode("Mixolydian b6 / Hindu", [ 0, 2, 4, 5, 7, 8, 10 ]);
	modes[2] = new Mode("Dorian b2 / Hindi", [ 0, 1, 3, 5, 7, 9, 10 ]);
	modes[3] = new Mode("Lydian Dominant", [ 0, 2, 4, 6, 7, 9, 10 ]);
	return new Scale("Melodic Minor", modes);
}

ScaleFactory.prototype.buildHarmonicMajorScale = function ScaleFactory_buildHarmonicMajorScale()
{
	var modes = new Array(4);
	modes[0] = new Mode("Haromonic Major / Ionian b6", [ 0, 2, 4, 5, 7, 8, 11 ]);
	modes[1] = new Mode("Mixolydian b2", [ 0, 1, 4, 5, 7, 9, 10 ]);
	modes[2] = new Mode("Phrygian b4", [ 0, 1, 3, 4, 7, 8, 10 ]);
	modes[3] = new Mode("Lydian minor", [ 0, 2, 3, 6, 7, 9, 11 ]);
	return new Scale("Harmonic Major", modes);
}

ScaleFactory.prototype.buildNeapolitanMinorScale = function ScaleFactory_buildNeapolitanMinorScale()
{
	var modes = new Array(4);
	modes[0] = new Mode("Phrygian #7 / Neapolitan Minor", [ 0, 1, 3, 5, 7, 8, 11 ]);
	modes[1] = new Mode("Lydian #6", [ 0, 2, 4, 6, 7, 10, 11 ]);
	modes[2] = new Mode("Ionian #2", [ 0, 3, 4, 5, 7, 9, 11 ]);
	modes[3] = new Mode("Hungarian Gypsy / Aeolian #4", [ 0, 2, 3, 6, 7, 8, 10 ]);
	return new Scale("Neapolitan Minor", modes);
}

ScaleFactory.prototype.buildDoubleHarmonicMajorScale = function ScaleFactory_buildDoubleHarmonicMajorScale()
{
	var modes = new Array(5);
	modes[0] = new Mode("Double Harmonic Major", [ 0, 1, 4, 5, 7, 8, 11 ]);
	modes[1] = new Mode("Oriental", [ 0, 1, 4, 5, 6, 9, 10 ]);
	modes[2] = new Mode("Lydian #2 #6", [ 0, 3, 4, 6, 7, 10, 11 ]);
	modes[3] = new Mode("Phrygian", [ 0, 1, 3, 4, 7, 8, 9 ]);
	modes[4] = new Mode("Hungarian Gypsy Minor", [ 0, 2, 3, 6, 7, 8, 11 ]);
	return new Scale("Double Harmonic Major", modes);
}

ScaleFactory.prototype.buildNeapolitanMajorScale = function ScaleFactory_buildNeapolitanMajorScale()
{
	var modes = new Array(2);
	modes[0] = new Mode("Neapolitan Major", [ 0, 1, 3, 5, 7, 9, 11 ]);
	modes[1] = new Mode("Lydian b6 b7", [ 0, 2, 4, 6, 7, 8, 10 ]);
	return new Scale("Neapolitan Major", modes);
}

ScaleFactory.prototype.buildHungarianMajorScale = function ScaleFactory_buildHungarianMajorScale()
{
	var modes = new Array(2);
	modes[0] = new Mode("Mela Nasikabhushani", [ 0, 3, 4, 6, 7, 9, 10 ]);
	modes[1] = new Mode("Japanese Nohkan", [ 0, 2, 5, 6, 8, 9, 11 ]);
	return new Scale("Hungarian Major", modes);
}

ScaleFactory.prototype.buildAerycrianScale = function ScaleFactory_buildAerycrianScale()
{
	var modes = new Array(4);
	modes[0] = new Mode("Mela Syamalangi", [ 0, 2, 3, 6, 7, 8, 9 ]);
	modes[1] = new Mode("Mela Ganamurti / Neapolitan Minor bb3", [ 0, 1, 2, 5, 7, 8, 11 ]);
	modes[2] = new Mode("Mela Visvambhari", [ 0, 1, 4, 6, 7, 10, 11 ]);
	modes[3] = new Mode("Katocrian", [ 0, 3, 5, 6, 9, 10, 11 ]); // {0,3,5,6,9,10,11}
	return new Scale("Aerycrian", modes);
}