import { Component } from '@angular/core';

@Component({
  selector: 'app-art-avatarcreator',
  standalone: true,
  imports: [],
  templateUrl: './art-avatarcreator.component.html',
  styleUrl: './art-avatarcreator.component.css'
})
export class ArtAvatarcreatorComponent {
  headOptions:Array<string> = [
    'Basic',
    'ChinPointy',
    'ChinRounded',
    'ChinBold'
  ];
  hairOptions:Array<string> = [
    'Bald',
    'Layedover',
    'StraightShort',
    'StraightLong',
    'StraightBun',
    'WaveyShort',
    'CurlyShort',
    'PoofyShort',
    'PoofyBig',
    'Bowlcut',
    'Spiked',
    'SpikedStraight',
    'SpikedLong',
    'Mohawk'
  ];
  eyesOptions:Array<string> = [
    'Basic',
    'Half',
    'Mad',
    'Sad',
    'Confused',
    'Wide',
    'Tiny',
    'Dots',
    'Weird',
    'Anime'
  ];
  noseOptions:Array<string> = [
    'Basic',
    'Big',
    'Small',
    'Tiny',
    'Wide',
    'Angled',
    'Pointy',
  ];
  mouthOptions:Array<string> = [
    'Neutral',
    'SmileSmall',
    'SmileBig',
    'SmileToothy',
    'FrownSmall',
    'FrownBig',
    'FrownToothy',
    'Slanted',
  ];

  selectedHead:string = this.headOptions[0];
  selectedHair:string = this.hairOptions[0];
  selectedEyes:string = this.eyesOptions[0];
  selectedNose:string = this.noseOptions[0];
  selectedMouth:string = this.mouthOptions[0];
}
