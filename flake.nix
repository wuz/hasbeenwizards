{
  description = "The HasBeenWizards site nix tooling";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
      buildNodeJs = pkgs.callPackage "${nixpkgs}/pkgs/development/web/nodejs/nodejs.nix" {
        python = pkgs.python3;
      };

        nodejs = buildNodeJs {
          enableNpm = true;
          version = "20.5.1";
          sha256 = "sha256-Q5xxqi84woYWV7+lOOmRkaVxJYBmy/1FSFhgScgTQZA=";
        };
    in {
        flakedPkgs = pkgs;
      devShells.default = pkgs.mkShell {
        packages = [ pkgs.bashInteractive ];
        buildInputs = with pkgs; [
          nodejs
          (yarn.override {
            nodejs = nodejs;
          })

        ];
      };
    });
}
