const sounds = document.querySelectorAll('audio');

sounds.forEach(sound => {

	console.log(sound.id)
	const btn = document.createElement('button');
	btn.classList.add('btn');

	btn.innerText = sound.id.charAt(0).toUpperCase() + sound.id.slice(1)

	btn.addEventListener('click', () => {
		stopSongs();

		document.getElementById(sound.id).play()
	})

	document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
	sounds.forEach(sound => {
		const song = document.getElementById(sound.id);

		sound.pause()
		song.currentTime = 0;
	})
}