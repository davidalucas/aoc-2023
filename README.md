# Advent of Code 2023 (Polyglot)

The purpose of this library is to combine all of my various AoC repositories (written in multiple programming languages) into a single monorepo. This repo uses Bazel as the build system, and includes libraries for JavaScript, Python, C#, Go, and Rust.

## How to Install Bazel
Instructions for how to install Bazel can be found [here](https://bazel.build/install). Installing `bazelisk` on Linux is a bit more involved. While there are bazel packages on some of the major Linux package repos (like apt), the Bazel docs currently suggest installing `bazelisk` and using it to manage multiple versions of bazel on the same machine (similar to how `nvm` works with Node.js).

The instructions for installing `bazelisk` can be found in the project's [README](https://github.com/bazelbuild/bazelisk/blob/master/README.md). If you're on Linux, you're going to need to follow steps something like this:
- Get the link to the install from the releases in Github
- cd into the directory where you want to install the binary (i.e. `cd /tmp` or something like that)
- Download the binary: `wget https://github.com/bazelbuild/bazelisk/releases/download/v1.19.0/bazelisk-linux-amd64`
- Make the binary executable: `chmod 755 bazelisk-linux-amd64`
- Rename the file to just 'bazelisk': `mv bazelisk-linux-amd64 bazelisk`
- Move the file to a typical executable directory: `sudo mv bazelisk /usr/local/bin`
- Create the following alias in your `~/.bashrc` file: `alias bazel="bazelisk"`
- Reload the terminal, or run `source ~/.bashrc` to have the alias take effect

At this point, you should be good to go. If you want autocompletion for bazel commands in your terminal, you'll need to go through some extra steps, which are detailed [here](https://bazel.build/install/completion).