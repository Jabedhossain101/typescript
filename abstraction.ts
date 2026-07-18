// real implementation na peye just idea pawa jabe. ar read jinishta hidden thakbe. and pore jana jabe

// idea pabo kintu real implementation ta clear thakbe na

/* 
1. Interface use kore
2. Abstract class use kore
*/

interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

//implementation
class MusicPlayer implements MediaPlayer {
  play(): void {
    console.log('playing music....');
  }

  pause(): void {
    console.log('music paused');
  }

  stop(): void {
      console.log('stop the music');
  }
}

const MahmudPlayer = new MusicPlayer(); //instance use kore
MahmudPlayer.play()

// abstract class

abstract class MediaPlaying{
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

//implementation
class rafsanPlayer extends MediaPlaying{
play(): void {
    console.log(`playing musics...`)
  }
  pause(): void {
      console.log(`Music is paused..`);
  }
  stop(): void {
      console.log(`Music stoped`);
  }
}

const rafsanPlayer1 = new rafsanPlayer();

rafsanPlayer1.pause()

