import music from "@/assets/game/sounds/at_the_end_of_hope_loop.wav";
import portalOpen from "@/assets/game/sounds/portalOpen.mp3";
import receivedCoin from "@/assets/game/sounds/coinReceived.mp3";

const sounds = {
  portalOpen,
  receivedCoin,
};

class SoundManager {
  private music: HTMLAudioElement;
  private volume = 0.25;
  private effectsEnabled = true;
  private activeEffects = new Set<HTMLAudioElement>();

  constructor() {
    this.music = new Audio(music);
    this.music.loop = true;
    this.music.volume = this.volume;
  }

  playMusic() {
    this.music.play().catch(() => {});
  }

  stopMusic() {
    this.music.pause();
    this.music.currentTime = 0;
  }

  get isMusicPlaying() {
    return !this.music.paused;
  }

  get areEffectsEnabled() {
    return this.effectsEnabled;
  }

  toggleMusic() {
    if (this.isMusicPlaying) {
      this.stopMusic();
      return false;
    }

    this.playMusic();
    return true;
  }

  toggleEffects() {
    this.effectsEnabled = !this.effectsEnabled;

    if (!this.effectsEnabled) {
      this.activeEffects.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
      this.activeEffects.clear();
    }

    return this.effectsEnabled;
  }

  play(sound: keyof typeof sounds, volume = this.volume) {
    if (!this.effectsEnabled) return;

    const audio = new Audio(sounds[sound]);

    audio.volume = volume;
    this.activeEffects.add(audio);
    audio.addEventListener("ended", () => this.activeEffects.delete(audio), {
      once: true,
    });
    audio.play().catch(() => this.activeEffects.delete(audio));
  }
}

export const soundManager = new SoundManager();
