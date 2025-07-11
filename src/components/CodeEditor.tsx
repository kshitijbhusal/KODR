

import Editor from '@monaco-editor/react';
import { useContext } from 'react';
import { CodeContext } from '../contexts/CodeContext'


export default function CodeEditor({ lang }: any) {
    const { setHtml, setCss }: any = useContext(CodeContext)

    function handleEditorChange(value: any) {
        if (lang == 'html') {
            setHtml(value)
        }
        if (lang == 'css') {
            setCss(value)
        }
    }

    return (
        <Editor

            height="52vh"
            theme='vs-dark'
            defaultLanguage={lang}
            defaultValue={lang == 'html' ? `<div>
    <h1>
        This is a Heading 1.
    </h1>
</div>` : `h1{
    color: aqua;
}` }
            onChange={handleEditorChange}
        />
    );
}
