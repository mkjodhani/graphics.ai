import React from 'react'
import ImageEditor from '@toast-ui/react-image-editor';
import 'tui-image-editor/dist/tui-image-editor.css';
const myTheme = {
    // Theme object to extends default dark theme.
};

export default function TextureUtil() {
    return (
        <div style={{'height':'100vh'}}>
            <ImageEditor
                includeUI={{
                    loadImage: {
                        path: "/static/themes/graphicsAI/productHeroWonder.png",
                        name: 'SampleImage',
                    },
                    theme: myTheme,
                    menu: ['crop', 'flip', 'rotate', 'draw', 'shape', 'icon', 'text', 'mask', 'filter'],
                    initMenu: 'filter',
                    uiSize: {
                        width: '100%',
                        height: '100%',
                    },
                    menuBarPosition: 'bottom',
                }}
                cssMaxHeight={500}
                cssMaxWidth={700}
                selectionStyle={{
                    cornerSize: 20,
                    rotatingPointOffset: 70,
                }}
                usageStatistics={true}
            />
        </div>
    )
}
