let arr: readonly number[] = [1 ]
arr[0] = 0

let arr2 = [1] as const;
arr2[0] = 0;

arr?.[1]

function add () {}

add?.()

function assety(str: string, msg?: string): asserts condition {
  if(!confition) {
    throw new AssertionError(msg);
  }
}

const wss = document.querySelector('canvas');
const ctx = wss.getContext('2d');
const image = new Image();
image.src = '../assets/pkq3.png';
image.onload = () => {
  ctx.drawImage(image, 0, 0);
  ctx.font = '微软雅黑 20px';
  ctx.save();
  ctx.clearRect(0,0,0,0);
  ctx.fillStyle = '#395980'
  ctx.fillRect();
  ctx.restore();
  ctx.beginPath();
  ctx.fillText('jojo', 0, 0)
}
