package io.kotlintest.specs

import io.kotlintest.AbstractSpec
import io.kotlintest.Tag
import io.kotlintest.TestCaseConfig
import io.kotlintest.TestContext
import io.kotlintest.extensions.TestCaseExtension
import java.time.Duration

abstract class AbstractFreeSpec(body: AbstractFreeSpec.() -> Unit = {}) : AbstractSpec() {

  init {
    body()
  }

  infix operator fun String.minus(test: FreeSpecScope.() -> Unit) =
      addTestCase(this, { this@AbstractFreeSpec.FreeSpecScope(this).test() }, defaultTestCaseConfig)

  infix operator fun String.invoke(test: FreeSpecScope.() -> Unit) =
      addTestCase(this, { FreeSpecScope(this).test() }, defaultTestCaseConfig)

  fun String.config(
      invocations: Int? = null,
      enabled: Boolean? = null,
      timeout: Duration? = null,
      threads: Int? = null,
      tags: Set<Tag>? = null,
      extensions: List<TestCaseExtension>? = null,
      test: FreeSpecScope.() -> Unit) {
    val config = TestCaseConfig(
        enabled ?: defaultTestCaseConfig.enabled,
        invocations ?: defaultTestCaseConfig.invocations,
        timeout ?: defaultTestCaseConfig.timeout,
        threads ?: defaultTestCaseConfig.threads,
        tags ?: defaultTestCaseConfig.tags,
        extensions ?: defaultTestCaseConfig.extensions)
    addTestCase(this, { this@AbstractFreeSpec.FreeSpecScope(this).test() }, config)
  }

  inner class FreeSpecScope(val context: TestContext) {

    infix operator fun String.minus(test: FreeSpecScope.() -> Unit) =
        context.registerTestCase(this, this@AbstractFreeSpec, { this@AbstractFreeSpec.FreeSpecScope(this).test() }, this@AbstractFreeSpec.defaultTestCaseConfig)

    infix operator fun String.invoke(test: TestContext.() -> Unit) =
        context.registerTestCase(this, this@AbstractFreeSpec, test, this@AbstractFreeSpec.defaultTestCaseConfig)

    fun String.config(
        invocations: Int? = null,
        enabled: Boolean? = null,
        timeout: Duration? = null,
        threads: Int? = null,
        tags: Set<Tag>? = null,
        extensions: List<TestCaseExtension>? = null,
        test: FreeSpecScope.() -> Unit) {
      val config = TestCaseConfig(
          enabled ?: this@AbstractFreeSpec.defaultTestCaseConfig.enabled,
          invocations ?: this@AbstractFreeSpec.defaultTestCaseConfig.invocations,
          timeout ?: this@AbstractFreeSpec.defaultTestCaseConfig.timeout,
          threads ?: this@AbstractFreeSpec.defaultTestCaseConfig.threads,
          tags ?: this@AbstractFreeSpec.defaultTestCaseConfig.tags,
          extensions ?: this@AbstractFreeSpec.defaultTestCaseConfig.extensions)
      context.registerTestCase(this, this@AbstractFreeSpec, { this@AbstractFreeSpec.FreeSpecScope(this).test() }, config)
    }
  }
}