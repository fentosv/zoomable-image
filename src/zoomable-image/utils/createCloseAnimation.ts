export default function createCloseAnimation($element: HTMLDialogElement) {
  const keyframes = new KeyframeEffect(
    $element,
    [{ transform: 'scale(1)' }, { transform: 'scale(0.5)' }],
    { duration: 200, fill: 'forwards' }
  )

  const animation = new Animation(keyframes, document.timeline)
  return animation
}