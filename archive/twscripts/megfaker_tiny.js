function%20end(){
	
	c='
512|556
512|557
525|527
526|526
533|555
518|531
517|531
517|529
521|535
517|524
522|532
522|533
523|533
521|534
523|534
523|536
523|539
516|531
517|530
516|523
509|528
507|537
506|538
505|537
526|529
530|555
530|556
525|528
509|567
531|555
504|563
532|551
533|549
525|547
526|555
522|552
525|548
527|553
526|556
526|543
527|550
510|568
516|560
507|558
517|561
528|551
531|549
530|551
519|561
521|544
501|542
518|555
532|550
532|548
521|542
519|566
518|563
517|563
518|562
512|567
511|567
505|570
516|546
520|554
522|539
513|534
540|561
544|535
539|557
552|530
555|528
521|560
562|532
561|535
560|532
562|530
553|530
522|536
528|571
545|548
544|545
435|486
547|546
526|564
531|562
536|565
511|572
527|570
481|528
';
	var%20d=document;
	if(window.frames.length>0)d=window.main.document;
	url=d.URL;
	if(url.indexOf('screen=place')==-1)alert('G� till samlingsplatsen s� att du kan beordra dina soldater att skoja lite med Meg.');
	
	a=c.match(/(\d+\|\d+)/g);
	b=a[Math.round(Math.random()*(a.length-1))].split("|");
	d.forms[0].x.value=b[0];
	d.forms[0].y.value=b[1];
	d.forms[0].spear.value=1;
	d.forms[0].sword.value=0;
	d.forms[0].axe.value=0;
	d.forms[0].spy.value=0;
	d.forms[0].light.value=0;
	d.forms[0].heavy.value=0;
	d.forms[0].ram.value=0;
	d.forms[0].catapult.value=0;
	d.forms[0].snob.value=0;
	d.forms[0].archer.value=0;
	d.forms[0].marcher.value=0;
	d.forms[0].knight.value=0;
}
end();