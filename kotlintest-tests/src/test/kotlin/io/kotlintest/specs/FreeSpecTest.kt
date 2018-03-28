package io.kotlintest.specs

import io.kotlintest.Spec
import io.kotlintest.shouldBe

class FreeSpecTest : AbstractFreeSpec() {

  var count = 0

  override fun interceptSpec(spec: Spec, process: () -> Unit) {
    super.interceptSpec(spec, process)
    count shouldBe 3
  }

  init {


    "context a" - {
      "b1" - {
        "c" {
          count += 1
        }
      }
      "b2" - {
        "d" {
          count += 2
        }
      }
    }


    "params" - {
      "support config" {
      }.config(invocations = 5)
    }
  }
}