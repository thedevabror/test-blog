import React from 'react';
import { Emoji } from 'emoji-picker-react';


function EmojiPickerComponent() {

  return (
    <div>
      {/* <EmojiPicker onEmojiClick={handleEmojiClick} height={500} width={400}  /> */}
      <Emoji unified="1f468-200d-1f4bb" size="50" />
      {/* <p>tanlangan emoji: {chosenEmoji && chosenEmoji.emoji}</p> */}
    </div>
  );
}

export default EmojiPickerComponent;