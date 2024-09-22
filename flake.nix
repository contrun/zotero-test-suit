{
  description = "Application packaged using poetry2nix";

  inputs.flake-utils.url = "github:numtide/flake-utils";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.poetry2nix = {
    url = "github:nix-community/poetry2nix";
    inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs =
    { self
    , nixpkgs
    , flake-utils
    , poetry2nix
    ,
    }:
    flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = nixpkgs.legacyPackages.${system};
      # see https://github.com/nix-community/poetry2nix/tree/master#api for more functions and examples.
      inherit (poetry2nix.lib.mkPoetry2Nix { inherit pkgs; }) mkPoetryApplication defaultPoetryOverrides;
    in
    {
      packages = {
        default = mkPoetryApplication {
          projectDir = self;
          overrides = defaultPoetryOverrides.extend
            (final: prev: {
              python3-xlib = prev.python3-xlib.overridePythonAttrs
                (
                  old: {
                    buildInputs = (old.buildInputs or [ ]) ++ [ prev.setuptools ];
                  }
                );
            });
        };
      };

      devShells.default = pkgs.mkShell {
        nativeBuildInputs = [
          poetry2nix.packages.${system}.default
          pkgs.poetry
        ];
      };
    });
}
