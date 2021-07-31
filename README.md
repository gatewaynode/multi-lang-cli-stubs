# CLI Stubs

This is a little exercise I decided to do to write a simple CLI application using a full featured library in 4 languages at once.

## Libraries

* Node
  + [commander]()
* Python
  + [click]()
  + [boto3]()
* Rust 
  + [clap]()
  + [AWS SDK for Rust](https://github.com/awslabs/aws-sdk-rust)
  + [tokio]()
* Bash = Not implemented yet
* Go = Not implemented yet

# Cross Lang Lock Dependencies

I want the dependencies to be absolute, not semver latest.  This is  a big problem with nodejs as we have to remember to use `npm install -E` to lock the version.  In Python `pip freeze` captures the exact version.  Rust also captures exact versions by default with `cargo add`, unfortunately the AWS SDK is in an Alpha state right now so we have to pull from the git repository directly with no real version control there.  Go has some strange ideas about dependency versions but I might be able to get it to work.  Bash... well, we are going to leverage the AWS CLI directly as our dependency so that's a system level decision as to what versions to stick with.
