/* Constants for the Deck component */

export const SLIDE_BLANK = 'slide_blank';
export const SLIDE_TITLE = 'slide_title';
export const SLIDE_TEXT = 'slide_text';

/* Object that represents an empty blank slide */
export const SLIDE_BLANK_OBJ = {
    type: SLIDE_BLANK,
    h1: '',
    h2:'',
};

/* Object that represents an empty title slide */
export const SLIDE_TITLE_OBJ = {
    type: SLIDE_TITLE,
    h1: '',
    text:'',
};

/* Object that represents an empty text slide */
export const SLIDE_TEXT_OBJ = {
    type: SLIDE_TEXT,
    text: '',
};
