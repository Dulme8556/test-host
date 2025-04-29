<style>
    @font-face {
        font-family: "OpenSans";
        src: url("../font/Open_Sans/OpenSans-VariableFont.ttf")
    }

    :global(:root) {
        font-family: 'OpenSans';
    }

    :global(body) {
        margin: 0;
    }

    @media (max-width: 768px) {
        :global(.content) {
            flex-direction: column;
        }

        :global(.sidebar) {
            width: 100%;
            height: 200px;
            border-left: none;
            border-top: 1px solid gray;
        }

        :global(.main__functions) {
            flex:1;
        }
    }
</style>